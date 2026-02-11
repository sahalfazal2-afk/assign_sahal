import Apple from '@assets/images/apple_logo.svg';
import EyeOpen from '@images/eye_open.svg';
import EyeClose from '@images/eye_close.svg';
import Email from '@images/email.svg';
import Password from '@images/password.svg';
import Search from '@images/search.svg';
import Empty from '@images/empty.svg';
import ArrowBack from '@images/arrow_back.svg';
import Logout from '@images/logout.svg';

type ImageAssets = {
  AppLogo: number;
  Background: number;
  Apple: React.FC<import('react-native-svg').SvgProps>;
  EyeOpen: React.FC<import('react-native-svg').SvgProps>;
  EyeClose: React.FC<import('react-native-svg').SvgProps>;
  Email: React.FC<import('react-native-svg').SvgProps>;
  Password: React.FC<import('react-native-svg').SvgProps>;
  Search: React.FC<import('react-native-svg').SvgProps>;
  Empty: React.FC<import('react-native-svg').SvgProps>;
  ArrowBack: React.FC<import('react-native-svg').SvgProps>;
  Logout: React.FC<import('react-native-svg').SvgProps>;
};

const images: ImageAssets = {
  Apple,
  EyeOpen,
  EyeClose,
  Email,
  Password,
  Search,
  Empty,
  ArrowBack,
  Logout,
  AppLogo: require('@images/app_logo.png'),
  Background: require('@images/background.jpg'),
};
export default images;
