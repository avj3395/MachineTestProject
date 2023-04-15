import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackType} from './navigationType';

import WelcomeScreen from '@app/screens/WelcomeScreen';
import LoginScreen from '@app/screens/LoginScreen';
import HomeScreen from '@app/screens/HomeScreen';
import OtpScreen from '@app/screens/OtpScreen';
import PinCodeScreen from '@app/screens/PincodeScreen';
import ProductDetailScreen from '@app/screens/ProductDetailScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackType>();

  return (
    <React.Fragment>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        <Stack.Screen
          name={'PinCodeScreen'}
          component={PinCodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'OtpScreen'} component={OtpScreen} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen
          name={'ProductDetailScreen'}
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default Navigation;
