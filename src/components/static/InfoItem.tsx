import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '@utils';
import { AppText } from '@shared';
import { moderateScale } from '@metrics';

interface InfoItemProps {
  label?: string;
  value?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <View style={styles.infoItem}>
    <AppText label={label} type="mini" color={colors.placeholder} />
    <AppText MT={4} label={value || '-'} color={colors.black} />
  </View>
);

export default InfoItem;

const styles = StyleSheet.create({
  infoItem: { marginBottom: moderateScale(15) },
});
