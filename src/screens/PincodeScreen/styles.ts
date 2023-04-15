import {COLORS, responseHeight} from '@app/constants/themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responseHeight(40),
  },
  pincodeStyle: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
