import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DepositSearch from '../screens/DepositSearch';
import CardSearch from '../screens/CardSearch';
import SavingsSearch from '../screens/SavingsSearch';

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DepositSearch" component={DepositSearch} options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="CardSearch" component={CardSearch} options={{ headerShown: false,animation: 'none' }} />
      <Stack.Screen name="SavingsSearch" component={SavingsSearch} options={{ headerShown: false, animation: 'none' }} />
    </Stack.Navigator>
  );
}
