import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import BackIcon from '@app/assets/generalIcons/backArrow.svg';
import {COLORS, responseWidth} from '@app/constants/themes';
import {navigateBack} from '@app/services/navigationRoots';

const BackButton = () => {
  return (
    <Pressable onPress={() => navigateBack()} style={styles.container}>
      <BackIcon />
      <Text style={styles.textStyle}>Back</Text>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responseWidth(90),
    paddingVertical: 3,
  },
  textStyle: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
