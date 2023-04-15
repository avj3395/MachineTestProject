import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  containerWrap: {
    marginBottom: 14,
  },
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey,
    // marginTop: 14,
    borderRadius: 3,
  },
  placeHolderStyle: {
    flex: 1,
    fontSize: 14,
    opacity: 0.6,
    height: 48,
    textAlign: 'left',
    left: 16,
    color: COLORS.black,
  },
  errorStyle: {
    color: 'red',
  },
});
export default styles;
