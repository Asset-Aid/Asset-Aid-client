import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './context/AuthContext';  // AuthContext
import AppStack from './navigation/AppStack';  // 로그인 후 화면
import AuthStack from './navigation/AuthStack';  // 로그인 전 화면
import SplashScreen from './screens/SplashScreen';
import FinancialGoals from './screens/FinancialGoals';

function App() {
  
  const { isLoggedIn, loading } = useContext(AuthContext) || { isLoggedIn: false, loading: true };

  if (loading) {
    return <SplashScreen />;  // 로딩 중에 보여줄 화면
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
       
    </NavigationContainer>
  );
}

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}


/*
export default function App() {
  return (
    <NavigationContainer>
      <FinancialGoals />
    </NavigationContainer>
  );
}
*/