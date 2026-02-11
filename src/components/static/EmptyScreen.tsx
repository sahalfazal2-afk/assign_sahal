import React from 'react';
import { AppText } from '@shared';
import { colors, images } from '@utils';
import { moderateScale } from '@utils/metrics';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface EmptyScreenProps {
  label?: string;
  description?: string;
  iconName?: keyof typeof images; // icon name from parent
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<ViewStyle>;
}

const EmptyScreen: React.FC<EmptyScreenProps> = ({
  label = 'NO records found!',
  description = 'Try adjusting your search to find what you are looking for.',
  iconName = 'Empty', // fallback icon name
  containerStyle,
  titleStyle,
  descriptionStyle,
}) => {
  const IconComponent = images[iconName]; // dynamically fetch SVG component

  return (
    <View style={[styles.cartContainer, containerStyle]}>
      {typeof IconComponent === 'function' && <IconComponent />}
      <AppText
        label={label}
        type={'subtitle'}
        textAlign={'center'}
        color={colors.black}
        MV={moderateScale(15)}
        containerStyle={titleStyle}
      />
      <AppText
        label={description}
        textAlign={'center'}
        MH={moderateScale(55)}
        color={colors.placeholder}
        containerStyle={descriptionStyle}
      />
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  cartContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
