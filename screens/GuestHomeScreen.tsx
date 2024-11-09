import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
    GuestHome: undefined;
    Login: undefined;
    DepositSearch: undefined;
};


const GuestHomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
               
                <Image
                    source={require('../assets/logo1.png')} 
                    style={styles.logo} 
                    resizeMode="contain"
                />
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>로그인하기</Text>
                </TouchableOpacity>
                
                
            </View>

            <Image
                    source={require('../assets/image1.png')} 
                    //resizeMode="contain"
                    style={{width:360, height:200, borderRadius:10}}
                />

            <TouchableOpacity 
                style={styles.searchButton}
                onPress={() => navigation.navigate('DepositSearch')}
            >
                <Text style={{fontWeight: 'bold', fontSize: 20 }} >금융상품 찾아보기</Text>
            </TouchableOpacity>
            
            <Text style={{ color: '#FC7900', fontWeight: 'bold', fontSize: 25, marginTop:10 }}>실시간 인기 차트</Text>
            
            <View style={styles.chartContainer}>       
                <View style={styles.innerContainer}>
                    <View style={styles.bigSeparator} />
                    <Text style={styles.chartText}>1</Text>
                    <View style={styles.smallSeparator}/>
                    <Text style={styles.chartText}>2</Text>
                    <View style={styles.smallSeparator}/>
                    <Text style={styles.chartText}>3</Text>
                </View>
                <Text style={styles.chartNameText}>예금</Text>

            </View>

            <View style={styles.chartContainer}>       
                <View style={styles.innerContainer}>
                    <View style={styles.bigSeparator} />
                    <Text style={styles.chartText}>1</Text>
                    <View style={styles.smallSeparator}/>
                    <Text style={styles.chartText}>2</Text>
                    <View style={styles.smallSeparator}/>
                    <Text style={styles.chartText}>3</Text>
                </View>
                <Text style={styles.chartNameText}>적금</Text>

            </View>

            <View style={styles.chartContainer}>       
                <View style={styles.innerContainer}>
                    <View style={styles.bigSeparator} />
                    <Text style={styles.chartText}>1</Text>
                    <View style={styles.smallSeparator}/>
                    <Text style={styles.chartText}>2</Text>
                    <View style={styles.smallSeparator}/>
                    <Text style={styles.chartText}>3</Text>
                </View>
                <Text style={styles.chartNameText}>카드</Text>

            </View>
           
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
    header:{
        backgroundColor: '#fff',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 15, 
        height: 30,
        marginBottom:20,

    },
    logo: {
        alignSelf: 'center', 
        width:120,
    },
    loginButton: {
        width:100, 
        height:30,  
        backgroundColor: '#FFAE64',
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    searchButton: {
        width:360, 
        height:35,  
        backgroundColor: '#F58748',
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15
    },
    chartText: {
        fontWeight: 'bold', 
        fontSize: 20,
        color: '#000000',
        marginLeft:10,
    },
    chartNameText: {
        fontWeight: 'bold', 
        fontSize: 20,
        color: '#000000',
        marginLeft: 10,

    },
    chartContainer:{
        flexDirection: 'row',
    },
    innerContainer:{
        width:300,
    },
    bigSeparator:{
        height: 2, 
        backgroundColor: '#FC7900', 
        marginHorizontal: 1, 
        marginTop: 15,   
        marginBottom: 10,
    },
    smallSeparator:{
        height: 1, 
        backgroundColor: '#D9D9D9', 
        marginHorizontal: 10, 
        marginTop: 10,   
        marginBottom: 10,

    }

});

export default GuestHomeScreen;