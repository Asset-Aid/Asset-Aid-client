import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Signup: undefined;
  RecommendMain: undefined;
};

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={userId}
        onChangeText={setUserId}
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('RecommendMain')}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text>아직 AssetAid회원이 아니라면?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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
  logo: {
    alignSelf: 'center',
    width: 300,
    marginTop: 30,
    marginBottom: 40,
  },
  input: {
    width: 320,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 10,
    marginBottom: 15,
    alignSelf: 'center',
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: '#FC7900',
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  signupText: {
    color: '#FC7900',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
});

export default Login;
