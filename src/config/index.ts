export const CONSTANTS = {
  API_BACKEND: import.meta.env.VITE_APP_API_URL,
  ENV: import.meta.env.VITE_APP_ENV as
    | 'development'
    | 'staging'
    | 'production'
    | undefined,
  DISABLE_IN_PRO: import.meta.env.VITE_APP_ENV === 'production',
  STORE_ACCESSTOKEN_KEY: '@app_accessToken',
  STORE_REFRESHTOKEN_KEY: '@app_refreshToken',
};
