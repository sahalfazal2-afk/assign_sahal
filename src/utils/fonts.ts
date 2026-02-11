// fonts.ts
import { TextStyle } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
import { scaleFont } from '@metrics';

// ---------------------- //
//    Type Definitions
// ---------------------- //

type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type FontSizeKeys =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h14'
  | 'h25'
  | 'h5'
  | 'h6'
  | 'heading'
  | 'regular'
  | 'large'
  | 'default'
  | 'small'
  | 'mini'
  | 'micro'
  | 'h13'
  | 'h10'
  | 'nano';

type FontFamilyName =
  | 'Poppins-Black'
  | 'Poppins-BlackItalic'
  | 'Poppins-Bold'
  | 'Poppins-BoldItalic'
  | 'Poppins-ExtraBold'
  | 'Poppins-ExtraBoldItalic'
  | 'Poppins-ExtraLight'
  | 'Poppins-ExtraLightItalic'
  | 'Poppins-Italic'
  | 'Poppins-Light'
  | 'Poppins-LightItalic'
  | 'Poppins-Medium'
  | 'Poppins-MediumItalic'
  | 'Poppins-Regular'
  | 'Poppins-SemiBold'
  | 'Poppins-SemiBoldItalic'
  | 'Poppins-Thin'
  | 'Poppins-ThinItalic';

interface FontFamilies {
  black: FontFamilyName;
  blackItalic: FontFamilyName;
  bold: FontFamilyName;
  boldItalic: FontFamilyName;
  extraBold: FontFamilyName;
  extraBoldItalic: FontFamilyName;
  extraLight: FontFamilyName;
  extraLightItalic: FontFamilyName;
  italic: FontFamilyName;
  light: FontFamilyName;
  lightItalic: FontFamilyName;
  medium: FontFamilyName;
  mediumItalic: FontFamilyName;
  regular: FontFamilyName;
  semiBold: FontFamilyName;
  semiBoldItalic: FontFamilyName;
  thin: FontFamilyName;
  thinItalic: FontFamilyName;
}

// ---------------------- //
// 🔹 Font Sizes (Responsive)
// ---------------------- //

const fontSizes: Record<FontSizeKeys, number> = {
  h0: scaleFont(40),
  h1: scaleFont(36),
  h2: scaleFont(35),
  h3: scaleFont(30),
  h4: scaleFont(28),
  h25: scaleFont(25),
  h5: scaleFont(24),
  h6: scaleFont(20),
  heading: scaleFont(18),
  large: scaleFont(17),
  regular: scaleFont(16),
  default: scaleFont(15),
  h14: scaleFont(14),
  h13: scaleFont(13),
  small: scaleFont(12),
  mini: scaleFont(11),
  h10: scaleFont(10),
  micro: scaleFont(8),
  nano: scaleFont(6),
};

// ---------------------- //
//    Font Families
// ---------------------- //

export const fontFamilies: FontFamilies = {
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  extraBold: 'Poppins-ExtraBold',
  extraBoldItalic: 'Poppins-ExtraBoldItalic',
  extraLight: 'Poppins-ExtraLight',
  extraLightItalic: 'Poppins-ExtraLightItalic',
  italic: 'Poppins-Italic',
  light: 'Poppins-Light',
  lightItalic: 'Poppins-LightItalic',
  medium: 'Poppins-Medium',
  mediumItalic: 'Poppins-MediumItalic',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  semiBoldItalic: 'Poppins-SemiBoldItalic',
  thin: 'Poppins-Thin',
  thinItalic: 'Poppins-ThinItalic',
};

// ---------------------- //
//    Base Text Styles
// ---------------------- //

export const typography = {
  // SemiBold
  title: { fontFamily: fontFamilies.semiBold, fontSize: fontSizes.h5 },
  heading: { fontFamily: fontFamilies.semiBold, fontSize: fontSizes.regular },
  caption: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.h6,
  },
  subtitle: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.heading,
  },
  defaultHeading: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.default,
  },
  miniBold: { fontFamily: fontFamilies.semiBold, fontSize: fontSizes.small },

  // Medium
  detail: { fontFamily: fontFamilies.medium, fontSize: fontSizes.default },
  default: { fontFamily: fontFamilies.medium, fontSize: fontSizes.h13 },
  micro: { fontFamily: fontFamilies.medium, fontSize: fontSizes.small },
  medium16: { fontFamily: fontFamilies.medium, fontSize: fontSizes.regular },

  // Regular
  small: { fontFamily: fontFamilies.regular, fontSize: fontSizes.h10 },
  button: { fontFamily: fontFamilies.regular, fontSize: fontSizes.h6 },
  mini: { fontFamily: fontFamilies.regular, fontSize: fontSizes.small },
  regular: { fontFamily: fontFamilies.regular, fontSize: fontSizes.h14 },
  description: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.default,
  },
  regularHeading: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.heading,
  },

  // Light
  light: { fontFamily: fontFamilies.light, fontSize: fontSizes.h13 },
  //not using Now

  input: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.large,
    fontWeight: '400' as FontWeight,
  },

  italicMedium: {
    fontFamily: fontFamilies.extraLight,
    fontSize: fontSizes.h13,
    fontStyle: 'italic' as TextStyle['fontStyle'],
    fontWeight: '200' as FontWeight,
  },
  bigBold: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.h25,
    fontWeight: '700' as FontWeight,
  },
  mainHeading: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.h1,
    fontWeight: '400' as FontWeight,
  },
} as const;

// ---------------------- //
//   Utility Export
// ---------------------- //

export const fonts = {
  size: fontSizes,
  family: fontFamilies,
  style: typography,
};

export type TypographyKey = keyof typeof typography;

// Optional: Helper to access font styles safely with intellisense
export const getFontStyle = (key: TypographyKey): TextStyle => typography[key];
