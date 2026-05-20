import React, { createContext, useContext, useMemo, useState } from 'react';
import type { User } from '../types';
import { mockUsers } from '../data/mockUsers';

type AuthRole = 'user' | 'admin';

interface LoginResult {
  success: boolean;
  error?: string;
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isGuest: boolean;
  guestLoginTarget: string | null;
  login: (email: string, password: string) => LoginResult;
  loginByRole: (role: AuthRole) => void;
  logout: () => void;
  checkIfLoggedIn: (targetPath: string) => boolean;
  onGuestLoginAttempt: (targetPath: string) => void;
}

const AUTH_STORAGE_KEY = 'fintrace_user';
const REDIRECT_TARGET_KEY = 'fintrace_redirect';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser) as User;
    } catch {
      return null;
    }
  });

  const [guestLoginTarget, setGuestLoginTarget] = useState<string | null>(null);

  const login = (email: string, password: string): LoginResult => {
    if (!email || !password) {
      return { success: false, error: 'Email dan password harus diisi' };
    }

    const foundUser = mockUsers.find((user) => user.email === email);

    if (!foundUser) {
      return { success: false, error: 'Email atau password salah' };
    }

    setUser(foundUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(foundUser));
    setGuestLoginTarget(null);
    localStorage.removeItem(REDIRECT_TARGET_KEY);

    return { success: true };
  };

  const loginByRole = (role: AuthRole) => {
    const nextUser = mockUsers.find((item) => item.role === role) ?? null;
    setUser(nextUser);

    if (nextUser) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser));
      setGuestLoginTarget(null);
      localStorage.removeItem(REDIRECT_TARGET_KEY);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(REDIRECT_TARGET_KEY);
    setGuestLoginTarget(null);
  };

  const isGuest = !user;

  const checkIfLoggedIn = (targetPath: string): boolean => {
    if (!user) {
      return false;
    }
    return true;
  };

  const onGuestLoginAttempt = (targetPath: string) => {
    if (!user) {
      setGuestLoginTarget(targetPath);
      localStorage.setItem(REDIRECT_TARGET_KEY, targetPath);
    }
  };

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: Boolean(user),
    isAdmin: user?.role === 'admin',
    isGuest,
    guestLoginTarget,
    login,
    loginByRole,
    logout,
    checkIfLoggedIn,
    onGuestLoginAttempt,
  }), [user, guestLoginTarget]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }

  return context;
}
