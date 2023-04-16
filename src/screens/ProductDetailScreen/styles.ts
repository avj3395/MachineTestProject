import {COLORS, SIZES, responseHeight} from '@app/constants/themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    width: SIZES.width,
    height: responseHeight(300),
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  nameStyle: {
    fontSize: 18,
    color: COLORS.black,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    fontSize: 15,
    color: COLORS.black,
    marginBottom: 8,
  },
});
