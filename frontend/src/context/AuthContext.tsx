import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, register, verify, User } from '../api/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  registerUser: (data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => Promise<void>;
  loginUser: (data: { email: string; password: string }) => Promise<void>;
  logoutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check session on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const verifiedUser = await verify();
        setUser(verifiedUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    const newUser = await register(data);
    setUser(newUser);
  };

  const loginUser = async (data: { email: string; password: string }) => {
    const loggedInUser = await login(data);
    setUser(loggedInUser);
  };

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
