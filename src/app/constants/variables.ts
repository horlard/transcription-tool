export const TOKEN_STORAGE_KEY = "tokens";

export const SIGN_OUT_PATH = "signout";
export const SIGN_UP_PATH = "signup";
export const LOGIN_PATH = "login";
export const HOME_PATH = "/";
export const PAYMENT_LINKS_PATH = "pay";

export const APP_THEME_STORAGE_KEY =
  process.env.REACT_APP_THEME_STORAGE_KEY ?? "preferred-theme";

export const USER_BALANCE_STATE_KEY =
  process.env.REACT_APP_BALANCE_STATE_KEY ?? "balance-state";
export const USER_EMPTY_WALLETS_STATE_KEY =
  process.env.REACT_APP_EMPTY_WALLETS_STATE_KEY ?? "empty-wallets-state";

export const COIN_IMG_BASE_URL =
  "https://res.cloudinary.com/busha-inc/image/upload/v1628857343/App/Currencies";

export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;

export const INTERCOM_APP_ID = process.env.REACT_APP_INTERCOM_APP_ID;

export const AUTH_URL = process.env.REACT_APP_AUTH_API_URL;
export const API_URL = process.env.REACT_APP_API_URL;
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

export const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

export const RECAPTCHA_SITE_KEY_V3 =
  process.env.REACT_APP_RECAPTCHA_SITE_KEY_V3;

export const FONT_BASE_URL =
  "https://res.cloudinary.com/busha-inc/raw/upload/v1651833681/fonts/Roobert";

export const BANK_IMG_BASE_URL =
  "https://res.cloudinary.com/busha-inc/image/upload/v1630583952/App/Banks";

export const SUPPORT_URL = process.env.REACT_APP_SUPPORT_URL;

export const UNAUTHORIZED_ERROR_CODE = 401;
export const UNFOUND_ROUTE = 404;

export const DASHBOARD_HEADER_HEIGHT = 64;

export const DASHBOARD_BODY_PADDING_X = 32;
export const DASHBOARD_BODY_PADDING_Y = 24;

export const DASHBOARD_BODY_PADDING_MOBILE_X = 16;
export const DASHBOARD_BODY_PADDING_MOBILE_Y = 12;

export const PAYMENT_LINKS_BODY_PADDING_X = 32;
export const PAYMENT_LINKS_BODY_PADDING_Y = 48;

export const PAYMENT_LINKS_BODY_PADDING_MOBILE_X = 16;
export const PAYMENT_LINKS_BODY_PADDING_MOBILE_Y = 20;

export const DASHBOARD_SIDEBAR_WIDTH = 262;

export const DASHBOARD_MOBILE_NAV_HEIGHT = 94;

export const DEFAULT_PROFILE_IMG =
  "https://res.cloudinary.com/busha-inc/image/upload/v1668529176/alice/v4/user.png";

export const DEFAULT_ERROR_MESSAGE = "Error Occured";

export const DEFAULT_DATE_QUERY_FORMAT = "YYYY-MM-DD";

export const FIREBASE_CONFIG = {
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

export const HIDDEN_BALANCE_STRING = "******";

export const DASHBOARD_ROUTES_ID = "dashboard-routes";

export const AUTH_APP_URL = process.env.REACT_APP_AUTH_APP_URL;

type BushaEnvType = typeof process.env.NODE_ENV | "staging";

export const BUSHA_ENV =
  (process.env.REACT_APP_BUSHA_ENV as BushaEnvType) ?? "development";

export const GTM_CONTAINER_ID = process.env.REACT_APP_GTM_CONTAINER_ID;
