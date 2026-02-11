interface ColorPalette {
  white: string;
  whiteOpacity: string;
  black: string;
  red: string;
  placeholder: string;
  primaryBlue: string;
  backgroundWhite: string;
  blackOpacity: string;
}

export const colors: ColorPalette = {
  // white shhades
  white: 'rgba(255, 255, 255, 1)',
  backgroundWhite: 'rgba(233, 233, 233, 1)',
  whiteOpacity: 'rgba(255, 255, 255, 0.33)',
  // black shades
  black: 'rgba(0, 0, 0, 1)',
  blackOpacity: 'rgba(0, 0, 0, 0.4)',
  // red shades
  red: 'rgba(216, 21, 21, 1)',
  // Gray
  placeholder: 'rgba(134, 136, 137, 1)',
  //Blue
  primaryBlue: 'rgba(64,126,199,1)',
} as const;
