import React from 'react';
import { NavigationContainer as NavigationProvider } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { navigationRef } from '../utils/navigation';
import { theme } from '../theme';
import { AuthProvider } from './Auth';

// Uncomment if you need use deep linking
// const linking = {
//   prefixes: [
//     /* your linking prefixes e.g.:*/
//     prefixes: ['https://mychat.com', 'mychat://'],
//   ],
//   config: {
//     /* configuration for matching screens with paths e.g.:*/
//      screens: {
//        Login: 'login',
//        Welcome: 'welcome',
//      },
//   },
// };

export const AppProvider = ({ children }: any) => (
  <PaperProvider theme={theme as any}>
    <NavigationProvider ref={navigationRef} /*linking={linking}*/>
      <AuthProvider>{children}</AuthProvider>
    </NavigationProvider>
  </PaperProvider>
);

AppProvider.displayName = 'AppProvider';
