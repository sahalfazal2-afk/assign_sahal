import { routes } from '@utils';
import LoginScreen from '@screens/LoginScreen';
import DashboardScreen from '@screens/Dashboard';
import DetailScreen from '@screens/DetailScreen';
import { MainStackParamList } from './navigationScreenParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getToken } from '@services/storage';
import React from 'react';
import { Loader } from '@shared';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = React.useState(true);

  const checkAuth = async () => {
    try {
      const token = await getToken();
      setIsAuthenticated(!!token);
    } finally {
      setCheckingAuth(false);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  // BLOCK rendering until token check finishes
  if (checkingAuth) {
    return <Loader visible={checkingAuth} />;
  }
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={isAuthenticated ? routes.DASHBOARD : routes.LOGIN}
    >
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.DASHBOARD} component={DashboardScreen} />
      <Stack.Screen name={routes.DETAIL_SCREEN} component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigator;

const screenOptions = { headerShown: false, gestureEnabled: false };
