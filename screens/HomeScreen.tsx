import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
    MyPage: undefined; 
};


const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/logo1.png')} 
                    style={styles.logo} 
                    resizeMode="contain"
                />
                <TouchableOpacity 
                 onPress={() => navigation.navigate('MyPage')}
                >
                    <Image
                        source={require('../assets/mypageicon.png')} 
                        style={styles.mypageicon} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                
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
    mypageicon:{
        width:30,
        height:30
    }
    

});

export default HomeScreen;