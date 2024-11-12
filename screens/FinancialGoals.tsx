import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

const FinancialGoals = () => {
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
            <View>
                <ScrollView>
                    <View style={styles.goal}>
                        <Text>장기 재정목표</Text>
                        <Text>매일 3000만큼{'\n'} 24년 9월 4일까지</Text>
                    </View>
                </ScrollView>
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
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
    },
    headerText: {
        marginLeft:10,
        fontSize: 18,
        color: '#2D2D2D',
    },
    separator: {
        height: 1,
        backgroundColor: '#C8C4BB',
        marginTop: 10,
    },
    goalTitleContainer:{
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
        backgroundColor:'#F5F5F5',
        borderRadius: 10,
        padding:5,
        paddingLeft: 30, 
        justifyContent: 'center',
    },
    goalTitleText: {
        color:'#2D2D2D',
        fontWeight:'bold',
        fontSize: 18,
        marginBottom:0,
         
    },
    goal:{
        width:115,
        height:150,
        backgroundColor:'#F5F5F5',
        borderRadius:20,
    }
});

export default FinancialGoals;
