import React from 'react';
import { View, Text, StyleSheet,  Pressable } from 'react-native';

const FinancialProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>금융성향 확인 및 수정</Text>
                <View style={styles.separator} />
            </View>
            <View>
                
                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>직업군</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>월 소득 수준</Text>
                    <View style={styles.infoContainer2}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>월 지출 수준</Text>
                    <View style={styles.infoContainer2}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>
                

                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>부채 수준</Text>
                    <View style={styles.infoContainer3}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>금융지식 수준</Text>
                    <View style={styles.infoContainer2}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>투자 성향</Text>
                    <View style={styles.infoContainer3}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

                <View style={styles.lineContainer} >
                    <Text style={styles.infoNameText}>투자 가능 금액</Text>
                    <View style={styles.infoContainer4}>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

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
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    headerText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#2D2D2D',
    },
    separator: {
        height: 1,
        backgroundColor: '#C8C4BB',
        marginTop: 10,
        marginBottom: 30,
    },
    editButton: {
        alignSelf: 'center',
        alignItems: 'center',
        width: 330,
        height: 45,
        borderWidth: 1,
        borderColor: '#FC7900',
        borderRadius: 10,
        marginTop: 20,
    },
    editText: {
        color: '#FC7900',
        fontWeight: 'bold',
        fontSize: 25,
    },
    lineContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10,
    },
    infoContainer: {
        marginRight: 30, 
        width: 210,  
        height: 37,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        alignSelf: 'flex-end', 
    },
    infoContainer2: {
        marginRight: 30, 
        width: 160, 
        height: 37,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        alignSelf: 'flex-end', 
    },
    infoContainer3: {
        marginRight: 30, 
        width: 180, 
        height: 37,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        alignSelf: 'flex-end', 
    },
    infoContainer4: {
        marginRight: 30, 
        width: 143, 
        height: 37,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        alignSelf: 'flex-end', 
    },
    infoNameText: {
        flex: 1,  
        marginLeft: 30,
        marginRight: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2D2D2D',
    },
    infoText: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#555555',
    },
});

export default FinancialProfile;
