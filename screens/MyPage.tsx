import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import Carousel from './Carousel';  

type RootStackParamList = {
    EditUserInfo: undefined;
    FinancialProfile: undefined;
    FinancialGoals: undefined;
    LikedItems: undefined;
};

const MyPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const carouselItems = [
    { id: '1', image: require('../assets/image1.png') },
    { id: '2', image: require('../assets/image2.png') },
    { id: '3', image: require('../assets/image1.png') },
    { id: '4', image: require('../assets/image2.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/character3.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <View style={styles.nameWrapper}>
            <Text style={styles.nameHighlight}>이름</Text>
            <Text style={styles.name}>님</Text>
          </View>
          <Text style={styles.userId}>@ID</Text>
          <TouchableOpacity>
            <Text style={styles.logoutText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('EditUserInfo')}>
          <Image
            source={require('../assets/usericon.png')}
            style={styles.buttonLogo}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>유저정보{'\n'} 수정</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('FinancialProfile')}>
          <Image
            source={require('../assets/walleticon.png')}
            style={styles.buttonLogo}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>금융성향{'\n'} 확인 및 수정</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('FinancialGoals')}>
          <Image
            source={require('../assets/goalicon.png')}
            style={styles.buttonLogo}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>재정목표{'\n'} 확인</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('LikedItems')}>
          <Image
            source={require('../assets/likecheckicon.png')}
            style={styles.buttonLogo}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>찜한 상품{'\n'} 보기</Text>
        </Pressable>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 30,
    marginLeft: 30,
    marginRight: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  nameHighlight: {
    color: '#FC7900',
    fontWeight: 'bold',
    fontSize: 25,
  },
  name: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
  },
  userId: {
    color: '#797979',
    fontSize: 15,
    marginBottom: 5,
  },
  logoutText: {
    color: '#C8C4BB',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
});

export default MyPage;
