import React, { useContext, useEffect, useState, createContext } from 'react';

import * as SessionService from '../services/sessionService';

const initialValues = {
  isLoading: false,
  isAuthenticated: false,
  hasOnboarding: false,
  setIsLoading: () => {},
  setIsAuthenticated: (_value: boolean) => {},
  setHasOnboarding: () => {},
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext(initialValues);

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasOnboarding, setHasOnboarding] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Promise.all([SessionService.getSession(), SessionService.hasOnboarding()])
      .then(([session, hasOnboard]) => {
        if (!session) {
          throw new Error('no session');
        }

        setHasOnboarding(hasOnboard);
        setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  }, [isAuthenticated]);

  const signIn = async () => {
    try {
      await SessionService.setSession({
        username: 'foo',
        token: 'xxxxx.yyyyy.zzzzz',
      });

      setIsAuthenticated(true);
    } catch (err) {
      console.warn('[SignIn] error: ', err);
      setIsAuthenticated(false);
    }
  };

  const signOut = async () => {
    await SessionService.removeSession();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={
        {
          isLoading,
          setIsLoading,
          isAuthenticated,
          setIsAuthenticated,
          hasOnboarding,
          setHasOnboarding,
          signIn,
          signOut,
        } as any
      }>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.displayName = 'AuthProvider';
