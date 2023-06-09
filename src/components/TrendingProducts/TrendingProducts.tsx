import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TrendingItems from './TrendingItems';
import {COLORS} from '@app/constants/themes';

type TrendingProductsType = {
  data: Array<any>;
  onSelectTending: Function;
};

const TrendingProducts = (props: TrendingProductsType) => {
  const {data, onSelectTending} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headStyle}>Trending Products</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{marginTop: 10, paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => (
          <TrendingItems
            onSelectTending={(data: any) => onSelectTending(data)}
            item={item}
            leftItem={index % 2 == 0}
          />
        )}
      />
    </View>
  );
};

export default TrendingProducts;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  headStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
