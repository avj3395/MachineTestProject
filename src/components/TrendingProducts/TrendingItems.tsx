import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BASE_URL} from '../../apis/api';
import {SIZES, responseHeight, responseWidth} from '@app/constants/themes';

type TrendingItemsType = {
  imageUrl: string;
  leftItem: boolean;
};

const TrendingItems = (props: TrendingItemsType) => {
  const {imageUrl, leftItem} = props;

  return (
    <View>
      <Image
        source={{
          uri: BASE_URL + imageUrl,
        }}
        style={[styles.imageStyle, {marginRight: leftItem ? 8 : 0}]}
        resizeMode={'stretch'}
      />
    </View>
  );
};

export default TrendingItems;

const styles = StyleSheet.create({
  imageStyle: {
    width: responseWidth(SIZES.width / 2 - 23),
    height: responseHeight(200),
    borderRadius: 6,
    marginBottom: 6,
  },
});
