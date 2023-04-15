import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="blue" size={'large'} />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
