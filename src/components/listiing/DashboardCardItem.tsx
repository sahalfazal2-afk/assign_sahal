import React from 'react';
import { colors } from '@utils';
import { moderateScale } from '@metrics';
import { AppText } from '@shared';
import FastImage, { Source } from 'react-native-fast-image';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface DashboardCardItemProps {
  onPress?: () => void;
  title: string;
  detail: string;
  image: number | Source | undefined;
}

const DashboardCardItem: React.FC<DashboardCardItemProps> = ({
  onPress,
  title,
  detail,
  image,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.imageContainer}>
        <FastImage
          source={image}
          style={styles.backgroundImage}
          resizeMode={'contain'}
        />
      </View>
      {/* Content */}
      <View style={styles.content}>
        <AppText
          label={title}
          color={colors.black}
          type="heading"
          numberOfLines={1}
        />
        <AppText
          label={detail}
          color={colors.placeholder}
          MT={moderateScale(5)}
          numberOfLines={2}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
    backgroundColor: colors.white,
  },
  imageContainer: {
    borderRadius: 100,
    margin: moderateScale(20),
    padding: moderateScale(15),
    backgroundColor: colors.backgroundWhite,
  },
  backgroundImage: {
    width: moderateScale(35),
    height: moderateScale(35),
    justifyContent: 'flex-end',
  },
  content: { paddingRight: moderateScale(20), flexShrink: 1 },
});

export default DashboardCardItem;
