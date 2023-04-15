import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/Layouts/SafeAreaWrapper';
import TextInputFieldComponent from '@app/components/TextInputComponent/TextInputComponent';
import usePincodeHook from '@app/logic/usePincodeHook';
import ButtonComponent from '@app/components/ButtonComponent/ButtonComponent';

const index = () => {
  const {formik, isLoading} = usePincodeHook();

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.pincodeStyle}>Pincode</Text>
        <TextInputFieldComponent
          placeholder="Enter your pincode"
          onChangeText={formik.handleChange('pincode')}
          onBlur={formik.handleBlur('pincode')}
          value={formik.values.pincode}
          autoFocus={true}
          isError={
            formik.errors.pincode && formik.touched.pincode ? true : false
          }
          errorMessage={formik.errors.pincode}
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
