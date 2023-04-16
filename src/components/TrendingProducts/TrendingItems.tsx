import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {BASE_URL} from '../../apis/api';
import {SIZES, responseHeight, responseWidth} from '@app/constants/themes';

type TrendingItemsType = {
  item: any;
  leftItem: boolean;
  onSelectTending: Function;
};

const TrendingItems = (props: TrendingItemsType) => {
  const {item, leftItem, onSelectTending} = props;

  return (
    <Pressable style={styles.container} onPress={() => onSelectTending(item)}>
      <Image
        source={{
          uri: BASE_URL + item?.image,
        }}
        style={[styles.imageStyle, {marginRight: leftItem ? 8 : 0}]}
        resizeMode={'stretch'}
      />
    </Pressable>
  );
};

export default TrendingItems;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
  },
  imageStyle: {
    height: responseHeight(200),
    borderRadius: 6,
    marginBottom: 6,
  },
});
