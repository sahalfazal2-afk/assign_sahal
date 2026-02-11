import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  DimensionValue,
  LayoutChangeEvent,
} from 'react-native';
import { colors, fonts } from '@utils';
import { Text } from 'react-native-paper';
import { TypographyKey } from '@utils/fonts';
import React, { FC, ReactNode } from 'react';

interface AppTextProps {
  /** Text label or content (either label or children can be used) */
  label?: string | number;
  children?: ReactNode;

  /** Text variant key (maps to fonts.style) */
  type?: TypographyKey;

  /** Font color (defaults to white) */
  color?: string;

  /** Margin and padding shortcuts */
  PH?: number | undefined | DimensionValue;
  PV?: number | undefined | DimensionValue;
  MH?: number | undefined | DimensionValue;
  MV?: number | undefined | DimensionValue;
  MB?: number | undefined | DimensionValue;
  MT?: number | undefined | DimensionValue;

  /** Text alignment */
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';

  /** Custom font style or text style */
  textStyle?: StyleProp<TextStyle>;

  /** Outer container style */
  containerStyle?: StyleProp<ViewStyle>;

  /** Tap event handler */
  onPress?: () => void;

  /** Limit number of lines */
  numberOfLines?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

/** 🔤 Flexible Text Component */
const AppText: FC<AppTextProps> = ({
  PH,
  PV,
  MH,
  MV,
  MB,
  MT,
  type = 'default',
  label,
  color = colors.white,
  onPress,
  children,
  onLayout,
  textAlign,
  textStyle,
  containerStyle,
  numberOfLines,
  ...props
}) => {
  /** Dynamically pick font style */
  const fontStyle = fonts.style?.[type] ?? fonts.style.default;

  return (
    <View style={containerStyle}>
      <Text
        {...props}
        onLayout={onLayout}
        onPress={onPress}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={[
          {
            marginTop: MT,
            marginBottom: MB,
            marginVertical: MV,
            marginHorizontal: MH,
            paddingHorizontal: PH,
            paddingVertical: PV,
            textAlign,
            color,
          },
          fontStyle,
          textStyle,
        ]}
      >
        {label}
        {children}
      </Text>
    </View>
  );
};

export default AppText;
