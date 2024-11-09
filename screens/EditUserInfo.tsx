import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const EditUserInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/backicon.png')}
                    />
                </TouchableOpacity>
                
                <Image
                    source={require('../assets/logo1.png')} 
                    style={styles.logo} 
                    resizeMode="contain"
                />

                <TouchableOpacity>
                    <Image
                        source={require('../assets/exiticon.png')}
                    />
                </TouchableOpacity>

                <Text>회원 정보 수정</Text>
                <View style={styles.separator} />
                
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

    },
    logo: {
        alignSelf: 'center', 
        width:120,
    },
    separator:{
        height: 1, 
        backgroundColor: '#C8C4BB', 
        marginHorizontal: 10, 
        marginTop: 20,   
        marginBottom: 50,
    },

});

export default EditUserInfo;