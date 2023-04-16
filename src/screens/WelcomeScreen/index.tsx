import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/Layouts/SafeAreaWrapper';
import LoadingComponent from '@app/components/LoadingComponent/LoadingComponent';
import {useAppSelector} from '@app/store/services/appStoreHook';
import {resetNavigation} from '@app/services/navigationRoots';
import {CommonActions, useNavigation} from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation<any>();
  const {isToken} = useAppSelector(state => state.app);

  useEffect(() => {
    if (isToken) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'PinCodeScreen'}],
        }),
      );
    }

    return;
  }, []);

  return (
    <SafeAreaWrapper>
      <LoadingComponent />
    </SafeAreaWrapper>
  );
};

export default index;
