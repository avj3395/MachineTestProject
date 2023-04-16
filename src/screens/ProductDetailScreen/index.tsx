import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/Layouts/SafeAreaWrapper';
import useProductDetails from '@app/logic/useProductDetails';
import {BASE_URL} from '../../apis/api';
import BackButton from '@app/components/BackButton/BackButton';
import Subproducts from '@app/components/SubProducts/Subproducts';
const index = () => {
  const {product, productDetails, isLoading} = useProductDetails();
  return (
    <SafeAreaWrapper containerStyle={{paddingHorizontal: 0}}>
      <BackButton />
      <ScrollView>
        <Image
          source={{uri: BASE_URL + product?.image}}
          style={styles.imageStyle}
          resizeMode={'stretch'}
        />
        <View style={styles.container}>
          <Text style={styles.nameStyle}>{product?.name}</Text>
          <Text style={styles.descriptionStyle}>{product?.description}</Text>
          <Text style={styles.nameStyle}>Sub Products</Text>

          {productDetails?.sub_products.length > 0 &&
            !isLoading &&
            productDetails?.sub_products.map((item: any, index: number) => (
              <Subproducts item={item} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default index;
