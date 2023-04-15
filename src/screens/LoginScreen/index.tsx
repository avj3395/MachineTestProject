import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/Layouts/SafeAreaWrapper';
import TextInputFieldComponent from '@app/components/TextInputComponent/TextInputComponent';
import ButtonComponent from '@app/components/ButtonComponent/ButtonComponent';
import useLoginHook from '@app/logic/useLoginHook';
const index = () => {
  const {formik, isLoading} = useLoginHook();
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.loginStyle}>Login</Text>
        <TextInputFieldComponent
          placeholder="Enter your phone"
          onChangeText={formik.handleChange('phone')}
          onBlur={formik.handleBlur('phone')}
          value={formik.values.phone}
          autoFocus={true}
          isError={formik.errors.phone && formik.touched.phone ? true : false}
          errorMessage={formik.errors.phone}
          keyboardType="number-pad"
        />
      </View>
      <ButtonComponent
        label="Submit"
        onPress={() => formik.handleSubmit()}
        isLoading={isLoading}
      />
    </SafeAreaWrapper>
  );
};

export default index;
