import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {navigate, resetNavigation} from '@app/services/navigationRoots';
import {useAppDispatch, useAppSelector} from '@app/store/services/appStoreHook';
import {getHomeDetails} from '@app/store/slice/appSlice';

const useHomeHook = () => {
  const dispatch = useAppDispatch();
  const {isLoadingHome, locationDetails, homeDetails} = useAppSelector(
    state => state.app,
  );

  const getHomeData = async () => {
    const formData = new FormData();
    formData.append('warehouse_id', locationDetails?.location?.warehouse_id);
    const resultAction = await dispatch(getHomeDetails(formData));
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return {isLoadingHome, homeDetails};
};

export default useHomeHook;
