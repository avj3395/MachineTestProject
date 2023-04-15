import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/Layouts/SafeAreaWrapper';
import TextInputFieldComponent from '@app/components/TextInputComponent/TextInputComponent';
import ButtonComponent from '@app/components/ButtonComponent/ButtonComponent';
import useOtpHook from '@app/logic/useOtpHook';
const index = () => {
  const {isLoading, formik} = useOtpHook();
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.otpStyle}>OTP</Text>
        <TextInputFieldComponent
          placeholder="Enter your OTP"
          onChangeText={formik.handleChange('otp')}
          onBlur={formik.handleBlur('otp')}
          value={formik.values.otp}
          autoFocus={true}
          isError={formik.errors.otp && formik.touched.otp ? true : false}
          errorMessage={formik.errors.otp}
          keyboardType="number-pad"
        />
      </View>
      <ButtonComponent
        label="Verify OTP"
        onPress={() => formik.handleSubmit()}
        isLoading={isLoading}
      />
    </SafeAreaWrapper>
  );
};

export default index;
