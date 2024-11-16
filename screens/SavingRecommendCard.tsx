import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import axios from 'axios';

interface SavingRecommendCardProps {
  savingId: number;
}

interface SavingData {
  savingId: number;
  savingName: string;
  bankColor: string;
  bankName: string;
}

const dummyData: SavingData[] = [
  {
    savingId: 101,
    savingName: 'NH내가Green저축',
    bankColor: '#FFD700',
    bankName: '농협은행',
  },
  {
    savingId: 102,
    savingName: 'NH올원e저축',
    bankColor: '#32CD32',
    bankName: '농협은행',
  },
];

const SavingRecommendCard: React.FC<SavingRecommendCardProps> = ({
  savingId,
}) => {
  const [savingData, setSavingData] = useState<SavingData | null>(null);

  useEffect(() => {
    // API 호출 함수
    // const fetchSavingData = async () => {
    //   try {
    //     const response = await token.get(`/recommend/saving`);
    //     setSavingData(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch saving data:', error);
    //   }
    // };

    // fetchSavingData();

    const filteredData = dummyData.find(data => data.savingId === savingId);
    if (filteredData) {
      setSavingData(filteredData);
    }
  }, [savingId]);

  if (!savingData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.card, {backgroundColor: savingData.bankColor}]}>
      <Text style={styles.title}>{savingData.savingName}</Text>
      <Image
        source={require('./assets/character1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.bankName}>{savingData.bankName}</Text>
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

export default SavingRecommendCard;
