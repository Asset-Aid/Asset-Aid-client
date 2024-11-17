import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SavingsSearch: undefined;
  CardSearch: undefined;
};

const DepositSearch = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedBank, setSelectedBank] = useState<string | null>(null);  // 은행 상태 관리
  const [selectedDepositType, setSelectedDepositType] = useState<string | null>(null);  // 예금 종류 상태 관리
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);  // 만기 기간 상태 관리

  const banks = [
    '농협', '국민', '삼성', '현대', '카카오뱅크', '토스뱅크', '케이뱅크', '하나', '우리', 'SC제일', '기업은행', '지방은행'
  ];

  const handleBankSelect = (bank: string) => {
    setSelectedBank(selectedBank === bank ? null : bank);
  };

  const handleDepositTypeSelect = (type: string) => {
    setSelectedDepositType(type);
  };

  const handleTermSelect = (term: string) => {
    setSelectedTerm(term);
  };

  const handleSearch = () => {
    if (selectedBank && selectedDepositType && selectedTerm) {
      navigation.navigate('SavingsSearch');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.selectContainer}>
            <TouchableOpacity style={styles.deposit}>
            <Text style={styles.selectContainerText}>예금</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.savings}
            onPress={() => navigation.navigate('SavingsSearch')}
            >
            <Text style={styles.selectContainerText}>적금</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('CardSearch')}
            >
            <Text style={styles.selectContainerText}>카드</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
            <Text style={styles.boldText}>은행으로 예금 찾기</Text>
            <View style={styles.bankContainer}>
            {banks.map((bank, index) => (
                <TouchableOpacity
                key={index}
                style={[
                    styles.bankButton,
                    selectedBank === bank && styles.selectedBank,
                ]}
                onPress={() => handleBankSelect(bank)}
                >
                <Text style={styles.boldText}>{bank}</Text>
                </TouchableOpacity>
            ))}
            </View>
            <Text style={{ marginLeft:5, fontSize: 10, fontWeight: 'bold' }}>
            지방은행의 경우 경남은행,광주은행,대구은행,부산은행,{'\n'}전북은행,제주은행을 포함하고 있습니다.
            </Text>
            <View style={styles.depositTypeContainer}>
            <TouchableOpacity
                style={[
                styles.depositTypeButton,
                selectedDepositType === '입출금자유예금' && styles.selectedDepositType,
                ]}
                onPress={() => handleDepositTypeSelect('입출금자유예금')}
            >
                <Text style={styles.boldText}>입출금자유예금</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                styles.depositTypeButton,
                selectedDepositType === '정기예금' && styles.selectedDepositType,
                ]}
                onPress={() => handleDepositTypeSelect('정기예금')}
            >
                <Text style={styles.boldText}>정기예금</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.termContainer}>
                <Text style={{ alignSelf:'center', marginLeft:15, marginRight:10, fontWeight: 'bold' }}>만기</Text>
                {['6개월', '12개월', '24개월 이상'].map((term, index) => (
                    <View key={index} style={styles.radioOption}>
                        <TouchableOpacity
                        style={[
                            styles.radioButton,
                            selectedTerm === term && styles.selectedRadio,
                        ]}
                        onPress={() => handleTermSelect(term)}
                        />
                        <Text style={styles.radioText}>{term}</Text>
                    </View>
                ))}
            </View>
        </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.boldText}>초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
          disabled={!selectedBank || !selectedDepositType || !selectedTerm}
        >
          <Text style={styles.boldText}>검색</Text>
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
  boldText: {
    color: '#000',
    fontWeight: 'bold',
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
    backgroundColor: '#FEE0C5',
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
    backgroundColor: '#F5F5F5',
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
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  bankContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 5,
  },
  bankButton: {
    width: 80,
    height: 30,
    margin: 2,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBank: {
    backgroundColor: '#EEEEEE',
  },
  depositTypeContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  depositTypeButton: {
    width: 160,
    height: 30,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDepositType: {
    backgroundColor: '#EEEEEE',
  },
  termContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  radioButton: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: '#808080',
    backgroundColor: '#fff',
    marginRight: 8,
  },
  selectedRadio: {
    backgroundColor: '#FFAE64',
  },
  radioText: {
    fontSize: 14,
    color: '#000',
  },
});

export default DepositSearch;


