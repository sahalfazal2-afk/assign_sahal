import { routes } from '@utils';

// Define type-safe route params
export type MainStackParamList = {
  [routes.LOGIN]: undefined;
  [routes.DASHBOARD]: undefined;
  [routes.DETAIL_SCREEN]: { userId: string };
};
