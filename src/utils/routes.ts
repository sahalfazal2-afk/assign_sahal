export const routes = {
  LOGIN: 'LOGIN',
  DASHBOARD: 'DASHBOARD',
  DETAIL_SCREEN: 'DETAIL_SCREEN',
} as const;

export type RouteKeys = keyof typeof routes;
export type RouteValues = (typeof routes)[RouteKeys];
