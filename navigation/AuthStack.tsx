import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import GuestHomeScreen from '../screens/GuestHomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { SearchStack } from './SearchStack'; 

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
      initialRouteName="GuestHome"
      screenOptions={{
        headerTitle: () => (
          <Image
            source={require('../assets/logo1.png')} 
            style={{ width: 100, height: 13 }} 
            resizeMode="contain"
          />
        ),
        headerBackTitleVisible: false, 
        headerShadowVisible: false, 
        headerTitleAlign: 'center',
        animation: 'none'
      }}
    >
      <Stack.Screen name="GuestHome" component={GuestHomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitle: '', 
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
          headerTitle: '', 
        }}
      />
      
      <Stack.Screen
        name="Search"
        component={SearchStack}
        options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );
}
