import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CustomCarousel from '../components/Carousel';
import InfoModal from '../components/InfoModal';


const mock = new MockAdapter(axios);

mock.onGet('/dummy-deposits').reply(200, [
  { depositName: "LIVE정기예금", bank: "부산은행", depositId: 615 },
  { depositName: "e-그린세이브예금", bank: "한국스탠다드차타드은행", depositId: 610 },
  { depositName: "The플러스예금", bank: "광주은행", depositId: 660 },
]);

mock.onGet('/dummy-savings').reply(200, [
  { savingId: 972, savingName: "jbank 저금통적금", bank: "제주은행" },
  { savingId: 971, savingName: "VIP플러스적금", bank: "광주은행" },
  { savingId: 970, savingName: "여행스케치_남도투어적금", bank: "광주은행" },
]);

mock.onGet('/dummy-cards').reply(200, [
  { cardId: 1, cardName: "신한카드 Mr.Life신한카드", bank: "신한카드" },
  { cardId: 2, cardName: "삼성카드 taptap O삼성카드", bank: "삼성카드" },
  { cardId: 3, cardName: "현대카드 M현대카드", bank: "현대카드" },
]);

type RootStackParamList = {
  GuestHome: undefined;
  Login: undefined;
  Search: { screen: string };
  DepositSearch: undefined;
};

const GuestHomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{ rank: string; details: string }>({ rank: '', details: '' });

  const [depositData, setDepositData] = useState<any[]>([]);
  const [savingData, setSavingData] = useState<any[]>([]);
  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDummyData = async () => {
      try {
        const depositResponse = await axios.get('/dummy-deposits');
        const savingResponse = await axios.get('/dummy-savings');
        const cardResponse = await axios.get('/dummy-cards');

        setDepositData(depositResponse.data);
        setSavingData(savingResponse.data);
        setCardData(cardResponse.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDummyData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#FC7900" />;
  }

  const handleRankClick = (id: number, details: string) => {
    setSelectedItem({ rank: `${id}`, details });
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo1.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>로그인하기</Text>
        </TouchableOpacity>
      </View>
      <CustomCarousel />
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search', { screen: 'DepositSearch' })}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>금융상품 찾아보기</Text>
      </TouchableOpacity>

      <Text style={{ color: '#FC7900', fontWeight: 'bold', fontSize: 25, marginTop: 15, marginBottom: 15 }}>실시간 인기 차트</Text>

      {/* 예금 */}
      <View style={styles.chartContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.bigSeparator} />
          {depositData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleRankClick(item.depositId, `${item.depositName} - ${item.bank}`)}>
              <View style={styles.rankContainer}>
                <Text style={styles.chartText}>{index + 1}</Text>
                <Text style={styles.rankText}>{item.depositName}</Text>
                <Text style={styles.rankText}> | {item.bank}</Text>
              </View>
              {index < depositData.length - 1 && <View style={styles.smallSeparator} />}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.chartNameText}>예금</Text>
      </View>

      {/* 적금 */}
      <View style={styles.chartContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.bigSeparator} />
          {savingData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleRankClick(item.savingId, `${item.savingName} - ${item.bank}`)}>
              <View style={styles.rankContainer}>
                <Text style={styles.chartText}>{index + 1}</Text>
                <Text style={styles.rankText}>{item.savingName}</Text>
                <Text style={styles.rankText}> | {item.bank}</Text>
              </View>
              {index < savingData.length - 1 && <View style={styles.smallSeparator} />}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.chartNameText}>적금</Text>
      </View>

      {/* 카드 */}
      <View style={styles.chartContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.bigSeparator} />
          {cardData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleRankClick(item.cardId, `${item.cardName} - ${item.bank}`)}>
              <View style={styles.rankContainer}>
                <Text style={styles.chartText}>{index + 1}</Text>
                <Text style={styles.rankText}>{item.cardName}</Text>
                <Text style={styles.rankText}> | {item.bank}</Text>
              </View>
              {index < cardData.length - 1 && <View style={styles.smallSeparator} />}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.chartNameText}>카드</Text>
      </View>

      {/* InfoModal */}
      <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} data={selectedItem} />
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 30,
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 120,
  },
  loginButton: {
    width: 100,
    height: 30,
    backgroundColor: '#FFAE64',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width: 360,
    height: 35,
    backgroundColor: '#F58748',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  chartText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    marginLeft: 10,
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
  },
  chartNameText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    marginLeft: 10,
  },
  chartContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 0,
  },
  innerContainer: {
    width: 300,
    alignSelf: 'center',
    padding: 0,
  },
  rankContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bigSeparator: {
    height: 2,
    backgroundColor: '#FC7900',
    marginHorizontal: 1,
    marginBottom: 10,
  },
  smallSeparator: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 10,
    marginTop: 0,
    marginBottom: 10,
  },
});

export default GuestHomeScreen;
