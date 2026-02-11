import { colors } from '@utils';
import { moderateScale } from '@metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, flex: 1 },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.backgroundWhite,
  },
  categoryListingContainer: { marginVertical: moderateScale(5) },
  searchInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(50),
    paddingRight: moderateScale(25),
    margin: moderateScale(15),
    marginTop: moderateScale(5),
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
  emptyView: { width: 25 },
});

export default styles;
