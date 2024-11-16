import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPage from './screens/MyPage';
import GuestHomeScreen from './screens/GuestHomeScreen';
import {Image, View, StyleSheet} from 'react-native';
import Login from './screens/Login';
import DepositSearch from './screens/DepositSearch';
import CardSearch from './screens/CardSearch';
import RecommendMain from './screens/RecommendMain';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GuestHome"
        screenOptions={{
          headerTitle: () => (
            <Image
              source={require('./assets/logo1.png')}
              style={{width: 100, height: 13}}
              resizeMode="contain"
            />
          ),
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          animation: 'none',
        }}>
        <Stack.Screen
          name="GuestHome"
          component={GuestHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerTitle: '', // 제목 숨김
          }}
        />
        <Stack.Screen
          name="DepositSearch"
          component={DepositSearch}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CardSearch"
          component={CardSearch}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="RecommendMain"
          component={RecommendMain}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
