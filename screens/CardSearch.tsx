import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  DepositSearch: undefined;
};

const CardSearch = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);  // 혜택 상태 관리

  const benefits = [
    '편의점', '음식', '주유', '통신', '교통', '쇼핑', '여행',
  ];

  const handleBenefitSelect = (benefit: string) => {
    if (selectedBenefit === benefit) {
      setSelectedBenefit(null);  // 이미 선택된 혜택을 다시 선택하면 해제
    } else {
      setSelectedBenefit(benefit);  // 새로운 혜택을 선택
    }
  };

  const handleSearch = () => {
    if (selectedBenefit) {
      // 검색 버튼 눌렀을 때 동작 (선택된 혜택에 따른 검색 로직 추가)
      navigation.navigate('DepositSearch');
    } else {
      //alert('혜택을 선택해 주세요!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <TouchableOpacity
          style={styles.deposit}
          onPress={() => navigation.navigate('DepositSearch')}
        >
          <Text style={styles.selectContainerText}>예금</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.savings}>
          <Text style={styles.selectContainerText}>적금</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.selectContainerText}>카드</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Text>혜택으로 카드 찾기</Text>
        <View style={styles.benefitContainer}>
          {benefits.map((benefit, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.benefitButton,
                selectedBenefit === benefit && styles.selectedBenefit,
              ]}
              onPress={() => handleBenefitSelect(benefit)}
              disabled={selectedBenefit !== null && selectedBenefit !== benefit} // 다른 버튼 선택 방지
            >
              <Text>{benefit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.resetButton}>
          <Text>초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text>검색</Text>
        </TouchableOpacity>
      </View>

      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  selectContainer: {
    width: 250,
    height: 40,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FC7900',
    alignSelf: 'center',
    marginBottom: 20,
  },
  selectContainerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
  },
  deposit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  savings: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#FEE0C5',
  },
  buttonsContainer: {
    width: 230,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#808080',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: '#FFAE64',
  },
  searchContainer: {
    width: 350,
    height: 95,
    alignSelf: 'center',
    marginBottom: 20,
  },
  benefitContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  benefitButton: {
    width: 80,
    height: 30,
    margin: 2,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBenefit: {
    backgroundColor: '#FFAE64',
  },
});

export default CardSearch;
