import {View, Text} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {navigate, resetNavigation} from '@app/services/navigationRoots';
import {useAppDispatch, useAppSelector} from '@app/store/services/appStoreHook';
import {loginApi} from '@app/store/slice/appSlice';

type FormType = {
  phone: string;
};

const useLoginHook = () => {
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.app);

  const initialValues: FormType = {
    phone: '',
  };

  const validationSchema = yup.object({
    phone: yup.string().min(10).max(10).required('phone is required.'),
  });

  const onSubmitData = async (value: any) => {
    const formData = new FormData();
    formData.append('phone', value?.phone);
    const resultAction = await dispatch(loginApi(formData));
    if (loginApi.fulfilled.match(resultAction)) {
      navigate('OtpScreen', null);
    } else {
      const error: any = resultAction?.payload;
      formik.setFieldError('phone', error?.errors?.phone[0]);
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

export default useLoginHook;
