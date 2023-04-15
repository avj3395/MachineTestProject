import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    // width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 24,
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 16,
  },
});
export default styles;
