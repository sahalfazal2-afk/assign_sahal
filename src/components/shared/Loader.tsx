import { colors } from '@utils';
import React, { memo } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

type LoaderProps = {
  visible?: boolean;
  transparent?: boolean;
  color?: string;
  backgroundColor?: string;
};

const Loader = ({
  visible = false,
  transparent = true,
  color = colors.white,
  backgroundColor = colors.blackOpacity,
}: LoaderProps) => {
  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <View
        style={[
          styles.overlay,
          { backgroundColor: transparent ? backgroundColor : colors.white },
        ]}
      >
        <ActivityIndicator size="large" color={color} />
      </View>
    </Modal>
  );
};

export default memo(Loader);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
