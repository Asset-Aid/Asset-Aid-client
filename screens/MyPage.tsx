import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

const MyPage = () => {
    const { width: viewportWidth } = Dimensions.get('window');
    const [activeSlide, setActiveSlide] = useState(0); // 현재 활성 슬라이드 상태
    const carouselItems = [
        { id: '1', image: require('../assets/image1.png') },
        { id: '2', image: require('../assets/image2.png') },
        { id: '3', image: require('../assets/image1.png') },
        { id: '4', image: require('../assets/image2.png') },
    ];

    interface CarouselItem {
        id: string;
        image: number; // 이미지 타입을 number로 설정
    }

    const renderItem = (item: CarouselItem) => (
        <View style={{ width: 360, height: 200, overflow: 'hidden', borderRadius: 20 }}>
            <Image
                source={item.image}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
            />
        </View>
    );
    

    const handleScroll = (event: any) => {
        const index = Math.floor(event.nativeEvent.contentOffset.x / viewportWidth);
        setActiveSlide(index);
    };

    return (
        <View style={styles.container}>
            {/* 상단 헤더 및 프로필 */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/backicon.png')} />
                </TouchableOpacity>
                <Image
                    source={require('../assets/logo1.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <TouchableOpacity>
                    <Image source={require('../assets/exiticon.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/character3.png')}
                    style={{ width: 30, marginLeft: 30, marginRight: 20 }}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <View style={styles.nameWrapper}>
                        <Text style={{ color: '#FC7900', fontWeight: 'bold', fontSize: 25 }}>이름</Text>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 25 }}>님</Text>
                    </View>
                    <Text style={{ color: '#797979', fontSize: 15, marginBottom: 5 }}>@ID</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#C8C4BB', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                            로그아웃
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.separator} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../assets/usericon.png')}
                        style={styles.buttonLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.buttonText}>유저정보{'\n'} 수정</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../assets/walleticon.png')}
                        style={styles.buttonLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.buttonText}>금융성향{'\n'} 확인 및 수정</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../assets/goalicon.png')}
                        style={styles.buttonLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.buttonText}>재정목표{'\n'} 확인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../assets/likecheckicon.png')}
                        style={styles.buttonLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.buttonText}>찜한 상품{'\n'} 보기</Text>
                </TouchableOpacity>
            </View>

            {/* 캐러셀 */}
            <View style={styles.carouselContainer}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    snapToInterval={360} // 고정된 300 너비에 맞춰 스냅 설정
                    decelerationRate="fast" // 빠르게 멈추도록 설정
                    contentContainerStyle={{ paddingHorizontal: (viewportWidth - 360) / 2 }} // 가운데 정렬
                >
                    {carouselItems.map((item) => (
                        <View style={{ width: 360, height: 200, borderRadius: 20, overflow: 'hidden' }} key={item.id}>
                            <Image
                                source={item.image}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="cover"
                            />
                        </View>
                    ))}
                </ScrollView>

                {/* 슬라이드 점 표시 */}
                <View style={styles.dotContainer}>
                    {carouselItems.map((_, index) => {
                        const dotStyle = {
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: index === activeSlide ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
                            marginHorizontal: 5,
                        };
                        return <View key={index} style={dotStyle} />;
                    })}
                </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 30,
    },
    logo: {
        alignSelf: 'center',
        width: 120,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    textContainer: {
        flexDirection: 'column',
    },
    nameWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 3,
    },
    separator: {
        height: 1,
        backgroundColor: '#C8C4BB',
        marginHorizontal: 10,
        marginVertical: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 200,
    },
    button: {
        width: 80,
        height: 110,
        backgroundColor: '#F58748',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 7,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonLogo: {
        width: 50,
    },
    carouselContainer: {
        position: 'relative',
        marginBottom: 30, // 아래에서 30 떨어지게 설정
    },
    dotContainer: {
        position: 'absolute',
        bottom: 20, // 캐러셀 이미지 위에 위치하도록 설정
        left: '50%',
        transform: [{ translateX: -50 }],
        flexDirection: 'row',
    },
});

export default MyPage;
