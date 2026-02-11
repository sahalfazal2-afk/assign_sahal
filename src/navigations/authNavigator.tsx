import React from 'react';
import { routes } from '@utils';
import LoginScreen from '@screens/LoginScreen';
import { MainStackParamList } from './navigationScreenParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '@screens/Dashboard';

const Stack = createNativeStackNavigator<MainStackParamList>();

const screenOptions = { headerShown: false, gestureEnabled: false };

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routes.LOGIN}
    >
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.DASHBOARD} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
