import { colors } from '@utils';
import { StyleSheet } from 'react-native';
import { moderateScale } from '@metrics';

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerImage: { width: '100%', height: '100%' },
  mainView: { flex: 1, justifyContent: 'center', padding: moderateScale(20) },
  loginBtn: {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    backgroundColor: colors.primaryBlue,
  },
});
export default styles;
