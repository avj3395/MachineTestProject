import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BASE_URL} from '../../apis/api';
import {COLORS, SIZES, responseHeight} from '@app/constants/themes';
type Props = {
  item: any;
};
const Subproducts = (prop: Props) => {
  const {item} = prop;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: BASE_URL + item?.image}}
        style={styles.imageStyle}
        resizeMode={'cover'}
      />
      <View style={styles.nameWrap}>
        <Text style={styles.nameStyle}>{item?.name}</Text>
      </View>
    </View>
  );
};

export default Subproducts;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width - 30,
    borderRadius: 6,
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 250,
    borderRadius: 6,
  },
  nameWrap: {
    backgroundColor: COLORS.white,
  },
  nameStyle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
