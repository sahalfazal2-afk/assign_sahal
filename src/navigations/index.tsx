import React from 'react';
import MainNavigator from './mainNavigator';
import { navigationRef } from './navigationRef';
import { NavigationContainer } from '@react-navigation/native';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
