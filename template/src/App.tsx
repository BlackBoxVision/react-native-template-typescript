import 'react-native-gesture-handler';
import React from 'react';
import Env from 'react-native-config';
import ErrorBoundary from 'react-native-error-boundary';

import { AppNavigator } from './routing';
import { AppProvider } from './contexts';
import { makeServer } from './utils/mock';

if (Env.NODE_ENV === 'development') {
  if (window.server) {
    window.server.shutdown();
  }
  window.server = makeServer();
}

const App = () => (
  <ErrorBoundary>
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  </ErrorBoundary>
);

App.displayName = 'App';

export default App;
