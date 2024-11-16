import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DepositRecommendCard from './DepositRecommendCard';
import SavingRecommendCard from './SavingRecommendCard';
import CardRecommendCard from './CardRecommendCard';

const {width} = Dimensions.get('window');

const depositData = [
  {
    depositId: 831,
    depositName: 'NH왈츠회전예금 II',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 988,
    depositName: 'NH내가Green초록세상예금',
    bankColor: '#32CD32',
    bankName: '농협은행',
  },
];

const savingData = [
  {
    savingId: 101,
    savingName: 'NH내가Green저축',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    savingId: 102,
    savingName: 'NH올원e저축',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
];

const cardData = [
  {
    cardId: 201,
    cardName: 'NH올원카드',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    cardId: 202,
    cardName: 'NH내가Green카드',
    bankColor: '#32CD32',
    bankName: '농협은행',
  },
];

const RecommendMain: React.FC = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <View>
      {item.depositId && <DepositRecommendCard depositData={item} />}
      {item.savingId && <SavingRecommendCard savingData={item} />}
      {item.cardId && <CardRecommendCard cardData={item} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
          <Image
            source={require('../assets/mypageicon.png')}
            style={styles.mypageIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* 예금 */}
      <Text style={styles.sectionTitle}>예금</Text>
      <Carousel
        data={depositData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        loop={true}
      />

      {/* 적금 */}
      <Text style={styles.sectionTitle}>적금</Text>
      <Carousel
        data={savingData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        loop={true}
      />

      {/* 카드 */}
      <Text style={styles.sectionTitle}>카드</Text>
      <Carousel
        data={cardData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  logo: {
    width: 120,
    height: 40,
  },
  mypageIcon: {
    width: 30,
    height: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#FF8C00',
  },
});

export default RecommendMain;
