import React from 'react';
import { View, Text, StyleSheet, ScrollView,Pressable } from 'react-native';

const LikedItems = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>찜한 상품</Text>
                <View style={styles.separator} />
            </View>
            <ScrollView>
                {/* ScrollView 내부에 컨텐츠 추가 */}
                <Pressable style={styles.likeItem}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>NH든든밥심예금</Text>
                        <Text style={styles.nameText}>|</Text>
                        <Text style={styles.nameText}>농협</Text>
                        <Text style={styles.nameText}>|</Text>
                        <Text style={styles.nameText}>예금</Text>
                    </View>
                    <View style={styles.contextRow}>
                        <Text style={styles.contentText}>* 판매 기간 : </Text>
                        <Text style={styles.contentText}></Text>
                    </View>
                    <View style={styles.contextRow}>
                        <Text style={styles.contentText}>* 가입 기간 : </Text>
                        <Text style={styles.contentText}></Text>
                    </View>
                    <View style={styles.contextRow}>
                        <Text style={styles.contentText}>* 가입 금액 : </Text>
                        <Text style={styles.contentText}></Text>
                    </View>
                    <View style={styles.contextRow}>
                        <Text style={styles.contentText}>* 기본 금리 : </Text>
                        <Text style={styles.contentText}></Text>
                    </View>
                    <View style={styles.contextRow}>
                        <Text style={styles.contentText}>* 최고 금리 : </Text>
                        <Text style={styles.contentText}></Text>
                    </View>
                </Pressable>
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
    likeItem:{
        alignSelf:'center',
        width:360,
        height:130,
        borderRadius:20,
        backgroundColor:'#F5F5F5',
        marginBottom:10,
    },
    nameContainer:{
        marginLeft:30,
        marginTop:15,
        marginBottom:5,
        flexDirection:'row',
    },
    nameText:{
        marginRight: 5,
        fontWeight:'bold',
        fontSize:15,
        color: '#2D2D2D',
    },
    contextRow:{
        marginLeft:35,
        flexDirection:'row'
    },
    contentText:{
        fontSize:10,
        color: '#2D2D2D',
    }
});

export default LikedItems;
