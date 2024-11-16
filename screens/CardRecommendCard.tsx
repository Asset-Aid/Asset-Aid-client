import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import axios from 'axios';

interface CardRecommendCardProps {
  cardId: number;
}

interface CardData {
  cardId: number;
  cardName: string;
  cardColor: string;
  cardIssuer: string;
}

const dummyData: CardData[] = [
  {
    cardId: 201,
    cardName: 'NH올원카드',
    cardColor: '#FFD700',
    cardIssuer: '농협은행',
  },
  {
    cardId: 202,
    cardName: 'NH내가Green카드',
    cardColor: '#32CD32',
    cardIssuer: '농협은행',
  },
];

const CardRecommendCard: React.FC<CardRecommendCardProps> = ({cardId}) => {
  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
    // API 호출 함수
    // const fetchCardData = async () => {
    //   try {
    //     const response = await token.get(`/recommend/card);
    //     setCardData(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch card data:', error);
    //   }
    // };

    // fetchCardData();

    // 더미 데이터를 기반으로 필터링
    const filteredData = dummyData.find(data => data.cardId === cardId);
    if (filteredData) {
      setCardData(filteredData);
    }
  }, [cardId]);

  if (!cardData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.card, {backgroundColor: cardData.cardColor}]}>
      <Text style={styles.title}>{cardData.cardName}</Text>
      <Image source={require('./assets/character1.png')} resizeMode="contain" />
      <Text style={styles.cardIssuer}>{cardData.cardIssuer}</Text>
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
    color: '#000',
    marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  cardIssuer: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CardRecommendCard;
