import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../constants/routes';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

const LoggedIn = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Welcome} component={Welcome} />
  </Stack.Navigator>
);

LoggedIn.displayName = 'LoggedIn';

export default LoggedIn;
