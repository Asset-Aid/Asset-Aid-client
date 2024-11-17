import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useNavigation } from '@react-navigation/native'; // React Navigation 사용

const FinancialGoals = () => {
    const [goals, setGoals] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null); // 클릭된 goal을 추적
    const navigation = useNavigation(); // 네비게이션 훅 사용

    useEffect(() => {
        // axios-mock-adapter를 설정하여 Mock 데이터 제공
        const mock = new MockAdapter(axios);

        // GET 요청에 대한 mock 응답 설정
        mock.onGet('/api/financial-goals').reply(200, [
            {
                goal_id: 1,
                goal_type: "short",
                purpose: "여행",
                hope_amount: 15000,
                due_date: "2026-01-01",
                cycle: "monthly"
            },
            {
                goal_id: 2,
                goal_type: "long",
                purpose: "목돈마련",
                hope_amount: 300000,
                due_date: "2040-12-31",
                cycle: "yearly"
            },
            {
                goal_id: 3,
                goal_type: "short",
                purpose: "비상금",
                hope_amount: 15000,
                due_date: "2026-01-01",
                cycle: "monthly"
            },
            {
                goal_id: 4,
                goal_type: "long",
                purpose: "펀드",
                hope_amount: 300000,
                due_date: "2040-12-31",
                cycle: "yearly"
            }
        ]);

        // 데이터 가져오는 함수
        const fetchGoals = async () => {
            try {
                const response = await axios.get('/api/financial-goals');
                setGoals(response.data);
            } catch (error) {
                console.error('Failed to fetch financial goals:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGoals();

        // 컴포넌트가 언마운트될 때 mock 리셋
        return () => {
            mock.restore();
        };
    }, []);

    const handleGoalClick = (goalId: number) => {
        if (selectedGoalId === goalId) {
            // 같은 goal을 두 번 클릭하면 다른 페이지로 이동
            //navigation.navigate('GoalDetail', { goalId }); // 'GoalDetail' 페이지로 이동 (목표 상세 페이지)
        } else {
            // goal 클릭 시 배경색 변경
            setSelectedGoalId(goalId);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#FFFFFF" />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>재정목표 확인</Text>
                <View style={styles.separator} />
            </View>
            <View style={styles.goalTitleContainer}>
                <Image
                    source={require('../assets/character1.png')}
                    style={styles.profileImage}
                    resizeMode="contain"
                />
                <View style={styles.goalTitle}>
                    <Text style={styles.goalTitleText}>님의 {'\n'} 재정목표 입니다</Text>
                </View>
            </View>
            <View style={styles.scrollContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {goals.map((goal) => (
                        <TouchableOpacity
                            key={goal.goal_id}
                            onPress={() => handleGoalClick(goal.goal_id)} // 클릭 시 handleGoalClick 호출
                            style={[
                                styles.goal,
                                selectedGoalId === goal.goal_id && styles.selectedGoal, // 클릭된 goal은 스타일 변경
                            ]}
                        >
                            <Text
                                style={[
                                    styles.goalTitleText,
                                    goal.goal_type === 'short' ? styles.shortGoalTitleText : styles.longGoalTitleText,
                                ]}
                            >
                                {goal.goal_type === 'short' ? '단기 재정목표' : '장기 재정목표'}
                            </Text>
                            <Text style={styles.goalText}>
                                목적:{goal.purpose}{'\n'}{goal.hope_amount.toLocaleString()}원 {'\n'} {goal.due_date}까지
                            </Text>
                            {selectedGoalId === goal.goal_id && (
                                <Image
                                    source={require('../assets/editgoalicon.png')}
                                    style={styles.editIcon} // edit 아이콘 스타일
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.addContainer}>
                <Image source={require('../assets/addgoalicon.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    headerText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#2D2D2D',
    },
    separator: {
        height: 1,
        backgroundColor: '#C8C4BB',
        marginTop: 10,
    },
    goalTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    profileImage: {
        width: 50,
    },
    goalTitle: {
        width: 240,
        height: 65,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 30,
        justifyContent: 'center',
    },
    goalTitleText: {
        color: '#2D2D2D',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    shortGoalTitleText: {
        color: '#FFAE64', // 단기 목표 색상
    },
    longGoalTitleText: {
        color: '#F58748', // 장기 목표 색상
    },
    scrollContainer: {
        marginTop: 0,
    },
    goal: {
        width: 115,
        height: 150,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // 중앙에 아이콘을 배치하기 위해 위치 설정
    },
    selectedGoal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 클릭 시 배경을 불투명한 검은색으로 변경
        justifyContent: 'center', // 아이콘과 텍스트가 중앙에 배치되도록 함
    },
    goalText: {
        color: '#2D2D2D',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'semibold',
    },
    editIcon: {
        position: 'absolute',
        top: '50%', // 중앙에 배치
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }], // 아이콘을 정확히 중앙에 배치
        width: 30,
        height: 30,
    },
    addContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default FinancialGoals;

