import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import axios from 'axios';

interface DepositRecommendCardProps {
  depositId: number;
}

interface DepositData {
  depositId: number;
  depositName: string;
  bankColor: string;
  bankName: string;
}

const dummyData: DepositData[] = [
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
  {
    depositId: 870,
    depositName: 'NH왈츠회전예금 II',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 792,
    depositName: 'NH왈츠회전예금 II',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 834,
    depositName: 'NH고향사랑기부예금',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 639,
    depositName: 'NH고향사랑기부예금',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 717,
    depositName: 'NH고향사랑기부예금',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 636,
    depositName: 'NH왈츠회전예금 II',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 951,
    depositName: 'NH고향사랑기부예금',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    depositId: 950,
    depositName: 'NH올원e예금',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
];

const DepositRecommendCard: React.FC<DepositRecommendCardProps> = ({
  depositId,
}) => {
  const [depositData, setDepositData] = useState<DepositData | null>(null);

  useEffect(() => {
    // API 호출 함수
    // const fetchDepositData = async () => {
    //   try {
    //     const response = await token.get(`/recommend/deposit`);
    //     setDepositData(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch deposit data:', error);
    //   }
    // };

    // fetchDepositData();

    const filteredData = dummyData.find(data => data.depositId === depositId);
    if (filteredData) {
      setDepositData(filteredData);
    }
  }, [depositId]);

  if (!depositData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.card, {backgroundColor: depositData.bankColor}]}>
      <Text style={styles.title}>{depositData.depositName}</Text>
      <Image
        source={require('./assets/character1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.bankName}>{depositData.bankName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  bankName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DepositRecommendCard;
