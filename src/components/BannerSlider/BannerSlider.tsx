import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SliderItem from './SliderItem';
import Carousel from 'react-native-snap-carousel';
import {SIZES} from '@app/constants/themes';

type BannerType = {
  data: Array<any>;
};

const BannerSlider = (props: BannerType) => {
  const {data} = props;
  return (
    <View>
      <Carousel
        layout={'default'}
        data={data}
        sliderWidth={SIZES.width}
        itemWidth={SIZES.width}
        renderItem={({item, index}) => <SliderItem imageUrl={item.image} />}
        autoplay={true}
        loop={true}
      />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({});
