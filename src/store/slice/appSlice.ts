import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../apis/api';

// Define a type for the slice state
type AppState = {
  isLoading: boolean;
  isLoadingHome: boolean;
  locationDetails: any;
  loginDetails: any;
  token: string;
  homeDetails: any;
};

const initialState: AppState = {
  isLoading: false,
  isLoadingHome: false,
  locationDetails: null,
  token: '',
  loginDetails: null,
  homeDetails: null,
};

export const getLocation = createAsyncThunk(
  'app/getLocation',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post('warehouse/get-by-location', params);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const loginApi = createAsyncThunk(
  'app/loginApi',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post('register', params);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const verifyOtpApi = createAsyncThunk(
  'app/verifyOtpApi',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post('verify-otp', params);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const getHomeDetails = createAsyncThunk(
  'app/getHomeDetails',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post('home', params);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLocation.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.locationDetails = action?.payload?.data;
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginDetails = action?.payload?.data;
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(verifyOtpApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verifyOtpApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action?.payload?.data?.token;
    });
    builder.addCase(verifyOtpApi.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getHomeDetails.pending, (state, action) => {
      state.isLoadingHome = true;
    });
    builder.addCase(getHomeDetails.fulfilled, (state, action) => {
      state.isLoadingHome = false;
      state.homeDetails = action?.payload?.data;
    });
    builder.addCase(getHomeDetails.rejected, (state, action) => {
      state.isLoadingHome = false;
    });
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
