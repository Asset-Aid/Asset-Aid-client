
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

const Login = () => {
  return (
    <View style={styles.container}>
     
     <Image
        source={require('../assets/logo1.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text >아직 AssetAid회원이 아니라면?</Text>
        <TouchableOpacity
          //onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.signupText}>회원가입</Text>
        </TouchableOpacity>
      </View>
      
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
    marginTop:100,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  loginButton: {
    width:300,
    height: 50,
    backgroundColor: '#FC7900',
    borderRadius: 2,
    alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupContainer:{
    alignSelf: 'center',
    flexDirection: 'row',
  },
  signupText: {
    color:'#FC7900',
    textDecorationLine: 'underline',
    marginLeft:10,

  }
});

export default Login;
