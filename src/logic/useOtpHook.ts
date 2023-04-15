import {View, Text} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {navigate, resetNavigation} from '@app/services/navigationRoots';
import {useAppDispatch, useAppSelector} from '@app/store/services/appStoreHook';
import {verifyOtpApi} from '@app/store/slice/appSlice';

type FormType = {
  otp: string;
};

const useOtpHook = () => {
  const dispatch = useAppDispatch();
  const {isLoading, loginDetails} = useAppSelector(state => state.app);

  const initialValues: FormType = {
    otp: '',
  };

  const validationSchema = yup.object({
    otp: yup.string().min(4).max(4).required('otp is required.'),
  });

  const onSubmitData = async (value: any) => {
    const formData = new FormData();
    formData.append('otp', value?.otp);
    formData.append('phone', loginDetails?.customer?.phone);
    const resultAction = await dispatch(verifyOtpApi(formData));
    if (verifyOtpApi.fulfilled.match(resultAction)) {
      resetNavigation('HomeScreen', null);
    } else {
      const error: any = resultAction?.payload;
      formik.setFieldError('otp', error?.errors?.otp[0]);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: Object) => {
      onSubmitData(values);
    },
  });

  return {formik, isLoading};
};

export default useOtpHook;
