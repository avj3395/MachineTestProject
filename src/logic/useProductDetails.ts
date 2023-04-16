import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@app/store/services/appStoreHook';
import {getProductDetails} from '@app/store/slice/appSlice';

const useProductDetails = () => {
  const route = useRoute<any>();
  const dispatch = useAppDispatch();
  const {locationDetails, productDetails, isLoading} = useAppSelector(
    state => state.app,
  );
  const {product} = route.params;

  const getProductData = async () => {
    const formData = new FormData();
    formData.append('warehouse_id', locationDetails?.location?.warehouse_id);
    formData.append('product_id', product?.id);
    const resultAction = await dispatch(getProductDetails(formData));
  };

  useEffect(() => {
    getProductData();
  }, [product]);

  return {product, productDetails, isLoading};
};

export default useProductDetails;
