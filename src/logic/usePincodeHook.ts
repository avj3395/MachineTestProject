import {View, Text} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {navigate, resetNavigation} from '@app/services/navigationRoots';
import {useAppDispatch, useAppSelector} from '@app/store/services/appStoreHook';
import {getLocation} from '@app/store/slice/appSlice';

type FormType = {
  pincode: string;
};

const usePincodeHook = () => {
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.app);

  const initialValues: FormType = {
    pincode: '',
  };

  const validationSchema = yup.object({
    pincode: yup.string().min(6).max(6).required('Pincode is required.'),
  });

  const onSubmitData = async (value: any) => {
    const formData = new FormData();
    formData.append('pincode', value?.pincode);
    const resultAction = await dispatch(getLocation(formData));
    if (getLocation.fulfilled.match(resultAction)) {
      resetNavigation('LoginScreen', null);
    } else {
      const error: any = resultAction?.payload;
      formik.setFieldError('pincode', error?.errors?.pincode[0]);
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

export default usePincodeHook;
