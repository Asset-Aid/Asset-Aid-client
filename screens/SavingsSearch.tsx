import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
    DepositSearch: undefined;
    CardSearch: undefined;
};


const SavingsSearch = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => navigation.navigate('CardSearch')}
                >
                    <Text style={styles.selectContainerText}>카드</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.resetButton}>
                    <Text>초기화</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton}>
                    <Text>검색</Text>
                </TouchableOpacity>

            </View>
            

            <ScrollView>
                <Text>적금</Text> 
            </ScrollView>
                
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
    selectContainer:{
        width:250,
        height:40,
        padding:10,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FC7900',
        alignSelf: 'center', 
        marginBottom:20,

    },
    selectContainerText:{
        fontWeight: 'bold', 
        fontSize: 18,
        color: '#000000',
    },
    deposit: {
        justifyContent: 'center',
        alignItems: 'center',
        width:70,
        height:30,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    savings: {
        justifyContent: 'center',
        alignItems: 'center',
        width:70,
        height:30,
        borderRadius: 20,
        backgroundColor: '#FEE0C5',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width:70,
        height:30,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    buttonsContainer:{
        width:230,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center', 
        marginBottom:20,
    },
    resetButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width:110,
        height:40,
        borderRadius:10,
        borderWidth: 1, 
        borderColor: '#808080',

    },
    searchButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width:110,
        height:40,
        borderRadius:10,
        borderWidth: 1, 
        borderColor: '#808080',
        backgroundColor:'#FFAE64',

    }


});

export default SavingsSearch;