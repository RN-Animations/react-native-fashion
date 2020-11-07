import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding from './src/Authentication/Onbording'

const AuthenticationStack = createStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <AuthenticationStack.Navigator>
        <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      </AuthenticationStack.Navigator>
    </NavigationContainer>
  );
}