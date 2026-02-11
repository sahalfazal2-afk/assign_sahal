import { colors } from '@utils';
import { moderateScale } from '@metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, flex: 1 },
  scrollView: {
    flexGrow: 1,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.backgroundWhite,
  },
  header: { marginHorizontal: moderateScale(15) },
  categoryListingContainer: { marginVertical: moderateScale(5) },
  searchInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(50),
    paddingRight: moderateScale(25),
    margin: moderateScale(15),
    backgroundColor: colors.backgroundWhite,
  },
  input: {
    flex: 1,
    flexShrink: 1,
    color: colors.black,
    height: moderateScale(50),
    fontSize: moderateScale(14),
    marginLeft: moderateScale(15),
    backgroundColor: 'transparent',
  },
});

export default styles;
