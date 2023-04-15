import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../apis/api';

// Define a type for the slice state
type AppState = {
  value: number;
};

const initialState: AppState = {
  value: 0,
};

// export const uploadImageApi = createAsyncThunk(
//   'app/uploadImageApi',
//   async (params: any, {rejectWithValue}) => {
//     const api = await getAxiosImageInstance();
//     try {
//       const response = await api.post('member/update', params);
//       return response?.data;
//     } catch (error: any) {
//       return rejectWithValue(error?.reponse?.data);
//     }
//   },
// );

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount, reset} =
  appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default appSlice.reducer;
