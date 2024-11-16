import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import token from '/token.tsx';
interface DepositRecommendCardProps {
  depositId: number;
}

interface DepositInfo {
  depositId: number;
  depositName: string;
  bankId: number[];
  bankColor: string;
}

const dummyData: DepositInfo[] = [
  {
    depositId: 831,
    depositName: 'NH왈츠회전예금 II',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 988,
    depositName: 'NH내가Green초록세상예금',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 870,
    depositName: 'NH왈츠회전예금 II',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 792,
    depositName: 'NH왈츠회전예금 II',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 834,
    depositName: 'NH고향사랑기부예금',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 639,
    depositName: 'NH고향사랑기부예금',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 717,
    depositName: 'NH고향사랑기부예금',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 636,
    depositName: 'NH왈츠회전예금 II',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 951,
    depositName: 'NH고향사랑기부예금',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
  {
    depositId: 950,
    depositName: 'NH올원e예금',
    bankId: [1, 4],
    bankColor: '#FFD700',
  },
];

const DepositRecommendCard: React.FC<DepositRecommendCardProps> = ({
  depositId,
}) => {
  const [depositInfo, setDepositInfo] = useState<DepositInfo | null>(null);

  useEffect(() => {
    // API 호출
    // const fetchDepositRecommendInfo = async () => {
    //   try {
    //     const response =  await token.get(`/recommend/deposit`);
    //     const data = await response.json();
    //     setDepositInfo(data);
    //   } catch (error) {
    //     console.error('Failed to fetch deposit info:', error);
    //   }
    // };

    const filteredData = dummyData.find(data => data.depositId === depositId);
    if (filteredData) {
      setDepositInfo(filteredData);
    }
  }, [depositId]);

  if (!depositInfo) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.card, {backgroundColor: depositInfo.bankColor}]}>
      <Text style={styles.depositName}>{depositInfo.depositName}</Text>
      <Text style={styles.depositId}>ID: {depositInfo.depositId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  depositName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  depositId: {
    fontSize: 14,
    color: '#fff',
  },
});

export default DepositRecommendCard;
