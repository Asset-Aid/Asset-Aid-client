import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import EditUserInfo from '../screens/EditUserInfo';
import MyPage from '../screens/MyPage';
import LikedItems  from '../screens/LikedItems';
import FinancialGoals from '../screens/FinancialGoals';
import FinancialProfile from '../screens/FinancialProfile';
import { SearchStack } from './SearchStack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
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
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="MyPage" component={MyPage} options={{ headerShown: true }}/>
    <Stack.Screen name="EditUserInfo" component={EditUserInfo} options={{ headerShown: true }}/>
    <Stack.Screen name="FinancialGoals" component={FinancialGoals} options={{ headerShown: true }}/>
    <Stack.Screen name="FinancialProfile" component={FinancialProfile} options={{ headerShown: true }}/>
    <Stack.Screen name="LikedItems" component={LikedItems} options={{ headerShown: true }}/>
    <Stack.Screen
        name="Search"
        component={SearchStack}
        options={{ headerShown: true }} 
    />

    </Stack.Navigator>
  );
}
