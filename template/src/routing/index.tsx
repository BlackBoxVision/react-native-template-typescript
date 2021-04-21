import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { useAuth } from '../contexts/Auth';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const styles = StyleSheet.create({
  loading: {
    height: '100%',
  },
});

export const AppNavigator = () => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <ActivityIndicator animating style={styles.loading} />;
  }

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

AppNavigator.displayName = 'AppNavigator';
