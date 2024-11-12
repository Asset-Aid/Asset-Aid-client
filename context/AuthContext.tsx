import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const login = (email: string, password: string) => {
    setLoading(true); // 로그인 시작 시 로딩 시작
    // 실제로는 백엔드 API를 사용하지만, 여기서는 임시로 가짜 조건을 사용합니다.
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        setIsLoggedIn(true);
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
      setLoading(false); // 로그인 처리 후 로딩 종료
    }, 1000); // 1초 후 로그인 처리 (임시로 지연 시간 추가)
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
