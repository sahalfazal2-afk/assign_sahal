import { colors } from '@utils';
import { moderateScale } from '@metrics';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  scrollView: { backgroundColor: colors.backgroundWhite, flexGrow: 1 },
  profileCard: {
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: moderateScale(15),
    padding: moderateScale(25),
    borderRadius: moderateScale(15),
  },
  profileImage: {
    height: moderateScale(100),
    width: moderateScale(100),
    justifyContent: 'center',
    borderRadius: moderateScale(55),
    backgroundColor: colors.placeholder,
  },
  infoCard: {
    marginHorizontal: moderateScale(15),
    padding: moderateScale(20),
    borderRadius: moderateScale(15),
    backgroundColor: colors.white,
  },
});
