import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../constants/routes';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const LoggedOut = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Login} component={Login} />
  </Stack.Navigator>
);

LoggedOut.displayName = 'LoggedOut';

export default LoggedOut;
