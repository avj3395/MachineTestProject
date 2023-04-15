import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {logoUrl} from '@app/constants/constants';
import {COLORS} from '@app/constants/themes';

const LogoComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: logoUrl}} style={{width: 50, height: 50}} />
      <Text style={styles.textStyle}>FreshAndFetch</Text>
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
