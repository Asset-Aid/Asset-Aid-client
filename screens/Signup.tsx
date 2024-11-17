
import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import DatePicker from 'react-native-date-picker';

const Signup = () => {
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo1.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <View style={styles.InputRow}>
        <Text style={styles.InputText}>아이디</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.InputRow}>
        <Text style={styles.InputText}>비밀번호</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.InputRow}>
        <Text style={styles.InputText}>닉네임</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.InputRow}>
        <Text style={styles.InputText}>생년월일</Text>
        <TouchableOpacity onPress={() => setDatePickerOpen(true)} style={styles.dateInput}>
          <Text>{birthdate ? birthdate.toISOString().slice(0, 10).replace(/-/g, '/') : ''}</Text>
        </TouchableOpacity>

        <DatePicker
          modal
          open={isDatePickerOpen}
          date={birthdate || new Date()} 
          mode="date"
          locale="ko"
          confirmText="확인"
          cancelText="취소"
          title={null}
          maximumDate={new Date()}
          onConfirm={(date: Date) => {
            setDatePickerOpen(false);
            setBirthdate(date); 
          }}
          onCancel={() => {
            setDatePickerOpen(false);
          }}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo:{
    alignSelf: 'center', 
    width:300,
    marginTop:30,
    marginBottom:40,
  },
  input: {
    width:250,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 10,
    alignSelf:'flex-end',
    marginRight: 30, 
    
  },
  InputRow:{
    flexDirection:'row',
    marginBottom:20,
  },
  InputText:{
    flex: 1,  
    marginLeft: 30,
    color:'#797979',
    fontSize:15,
    fontWeight:'bold',
    alignSelf: 'center',
  },
  dateInput: {
    width: 250,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  loginButton: {
    width:300,
    height: 50,
    backgroundColor: '#FC7900',
    borderRadius: 2,
    alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default Signup;
