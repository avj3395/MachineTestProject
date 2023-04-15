import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SIZES, responseHeight} from '@app/constants/themes';
import {BASE_URL} from '../../apis/api';

type SliderType = {
  imageUrl: string;
};

const SliderItem = (props: SliderType) => {
  const {imageUrl} = props;
  return (
    <View>
      <Image
        source={{
          uri: BASE_URL + imageUrl,
        }}
        style={styles.imageStyle}
        resizeMode={'stretch'}
      />
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: SIZES.width,
    height: responseHeight(250),
  },
});
