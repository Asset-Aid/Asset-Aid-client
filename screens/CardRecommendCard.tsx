import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface CardData {
  cardId: number;
  cardName: string;
  bankColor: string;
  bankName: string;
}

interface CardRecommendCardProps {
  cardData: CardData;
}

const CardRecommendCard: React.FC<CardRecommendCardProps> = ({cardData}) => {
  return (
    <View style={[styles.card, {backgroundColor: cardData.bankColor}]}>
      <Text style={styles.title}>{cardData.cardName}</Text>
      <Image
        source={require('../assets/character1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.bankName}>{cardData.bankName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 140,
    borderRadius: 16,
    padding: 16,
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
    right: 80,
    top: 85,
    position: 'absolute',
  },
  bankName: {
    fontSize: 15,
    left: 78,
    top: 110,
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default CardRecommendCard;
