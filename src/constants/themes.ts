import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const responseHeight = (value: number) => {
  return (height / 812) * value;
};

export const responseWidth = (value: number) => {
  return (width / 375) * value;
};

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#E5E6E8',
};

export const SIZES = {
  width,
  height,
};
