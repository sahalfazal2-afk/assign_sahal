import { Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const WINDOW_WIDTH: number = Dimensions.get('window').width;
export const WINDOW_HEIGHT: number = Dimensions.get('window').height;
export const SCREEN_HEIGHT: number = Dimensions.get('screen').height;
export const SCREEN_WIDTH: number = Dimensions.get('screen').width;

const guidelineBaseWidth = 375; // change this based on the design
const guidelineBaseHeight = 812; // change this based on the design

export const scaleFont = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scaleFont(size) - size) * factor;

export const ms = moderateScale;
export const RF = moderateScale;

export const verticalScale = (size: number): number =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const vs = verticalScale;

export const ANDROID: boolean = Platform.OS === 'android';
export const IOS: boolean = Platform.OS === 'ios';

export { RFValue };

export const defaultDimensions = {
  windowWidth: WINDOW_WIDTH,
  windowHeight: WINDOW_HEIGHT,
  screenwidth: SCREEN_WIDTH,
  screenheight: SCREEN_HEIGHT,
  smallPadding: moderateScale(10),
  basePadding: moderateScale(20),
  smallMargin: moderateScale(10),
  baseMargin: moderateScale(20),
  buttonHeight: moderateScale(48),
  PLATFORMS: {
    ANDROID,
    IOS,
  },
};
