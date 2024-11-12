import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const EditUserInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>회원 정보 수정</Text>
                <View style={styles.separator} />
            </View>
            <View>
                
                <Pressable style={styles.editButton}>
                    <Text style={styles.editText}>수정하기</Text>
                </Pressable>
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
    header: {
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
    },
    headerText: {
        marginLeft:10,
        fontSize: 18,
        color: '#2D2D2D',
    },
    separator: {
        height: 1,
        backgroundColor: '#C8C4BB',
        marginTop: 10,
    },
    editButton:{
        alignSelf:'center',
        alignItems:'center',
        width:330,
        height:45,
        borderWidth: 1,
        borderColor: '#FC7900',
        borderRadius:10
    },
    editText:{
        color:'#FC7900',
        fontWeight: 'bold',
        fontSize: 25,
    }
});

export default EditUserInfo;