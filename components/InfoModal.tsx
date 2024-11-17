/*
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type InfoModalProps = {
    visible: boolean;
    onClose: () => void;
    title?: string;
    content?: string;
};

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose, title, content }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>{title || '정보'}</Text>
                    <Text style={styles.content}>{content || '상세 내용이 여기에 표시됩니다.'}</Text>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: '#FC7900',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default InfoModal;

import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

interface InfoModalProps {
  visible: boolean;
  onClose: () => void;
  data: { rank: string; details: string };
}

const DummyData =[
  {
    "depositId": 670,
    "depositName": "1석7조통장(실세금리정기예금)",
    "bank": "중소기업은행",
    "joinWay": "인터넷,스마트폰",
    "startAt": "20241113",
    "endAt": "null",
    "limitDeposit": 0,
    "contents": "없음 실명의 개인\n(개인사업자 제외) 계좌 수 제한 없으며, 최소 1백만원 이상 납입한도 제한 없음",
    "intRate": 0.0
},
{
    "depositId": 660,
    "depositName": "The플러스예금",
    "bank": "광주은행",
    "joinWay": "인터넷,스마트폰",
    "startAt": "20241113",
    "endAt": "null",
    "limitDeposit": 0,
    "contents": "없음 실명의 개인\n(개인사업자 제외) 계좌 수 제한 없으며, 최소 1백만원 이상 납입한도 제한 없음",
    "intRate": 0.0
}
];

const InfoModal = ({ visible, onClose, data }: InfoModalProps) => {
  const [slideAnim] = useState(new Animated.Value(0)); // 애니메이션 값 초기화

  useEffect(() => {
    if (visible) {
      // 모달이 열리면 아래에서 위로 슬라이드되도록 애니메이션
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      // 모달이 닫히면 다시 원위치로
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal visible={visible} transparent={true} animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [300, 0] }) }],
            },
          ]}
        >
          
          <View style={styles.titleContainer}>
            <Text style={styles.rankText}>{data.rank}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailsText}>상세 내용: {data.details}</Text>
          </View>
          <Button title="닫기" onPress={onClose} />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // 아래쪽에 모달 배치
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 반투명
  },
  modalContent: {
    width: '100%', // 화면의 전체 너비
    height:700,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  titleContainer:{
    width:350,
    height:50,
    borderWidth: 2,
    borderColor: '#FC7900',
    borderRadius:20,
    backgroundColor:'#FEE0C5',
    alignItems:'center'
  },
  detailContainer:{
    width:350,
    height:300,
    backgroundColor:'#F5F5F5',
    borderRadius:20,
    alignItems:'center'
  },
  rankText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#FC7900'
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default InfoModal;
*/
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, Animated, Easing, Pressable, Image } from 'react-native';

interface InfoModalProps {
  visible: boolean;
  onClose: () => void;
  data: { rank: string; details: string };
}

const DummyData = [
  {
    depositId: 660,
    depositName: "The플러스예금",
    bank: "광주은행",
    joinWay: "인터넷,스마트폰",
    startAt: "20241113",
    endAt: "null",
    limitDeposit: 0,
    contents: "없음 실명의 개인\n(개인사업자 제외) 계좌 수 제한 없으며, 최소 1백만원 이상 납입한도 제한 없음",
    intRate: 0.0,
  }
];

const InfoModal = ({ visible, onClose, data }: InfoModalProps) => {
  const [slideAnim] = useState(new Animated.Value(0));

  // data의 depositId와 DummyData 내 일치하는 데이터 찾기
  const item = DummyData.find((d) => `${d.depositId}` === data.rank);

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal visible={visible} transparent={true} animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [300, 0] }) }],
            },
          ]}
        >
          <View style={styles.headerContainer}>
            <Pressable>
              <Image
                source={require('../assets/exiticon.png')} 
              />
            </Pressable>
            <Pressable style={styles.closeButton} onPress={onClose}>
              <Image
                source={require('../assets/exiticon.png')} 
              />
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.rankText}>{item ? `${item.depositName} | ${item.bank} | 예금` : data.rank}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailsText}>
              {item
                ? `* 가입 방법: ${item.joinWay}\n* 이율: ${item.intRate}%\n* 시작일: ${item.startAt}\n* 내용: ${item.contents}`
                : data.details}
            </Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: 700,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  headerContainer:{
    width:380,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16,
    marginBottom:20,
  },
  closeButton:{

  },
  titleContainer: {
    width: 350,
    height: 50,
    borderWidth: 2,
    borderColor: '#FC7900',
    borderRadius: 20,
    backgroundColor: '#FEE0C5',
    alignItems: 'center',
    marginBottom:5,
  },
  detailContainer: {
    width: 350,
    height: 300,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    alignItems: 'center',
    padding:15,
  },
  rankText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FC7900',
  },
  detailsText: {
    fontSize: 16,
    fontWeight:'semibold',
    marginBottom: 20,
  },
});

export default InfoModal;
