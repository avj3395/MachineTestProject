import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/Layouts/SafeAreaWrapper';
import useHomeHook from '@app/logic/useHomeHook';
import LoadingComponent from '@app/components/LoadingComponent/LoadingComponent';
import BannerSlider from '@app/components/BannerSlider/BannerSlider';
import LogoComponent from '@app/components/LogoComponent/LogoComponent';
import TrendingProducts from '@app/components/TrendingProducts/TrendingProducts';
const index = () => {
  const {isLoadingHome, homeDetails, onSelectTending} = useHomeHook();

  return (
    <SafeAreaWrapper containerStyle={{paddingHorizontal: 0}}>
      {isLoadingHome ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
          <LogoComponent />
          <BannerSlider data={homeDetails?.banners} />
          <TrendingProducts
            data={homeDetails?.trending_products}
            onSelectTending={(data: any) => onSelectTending(data)}
          />
        </View>
      )}
    </SafeAreaWrapper>
  );
};

export default index;
