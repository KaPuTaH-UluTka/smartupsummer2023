import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  globalLoading: boolean;
}

const initialState: LoadingState = {
  globalLoading: false,
};

export const LoadingReducer = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingFalse: (state) => {
      state.globalLoading = false;
    },
    setLoadingTrue: (state) => {
      state.globalLoading = true;
    },
  },
});

export default LoadingReducer.reducer;
export const { setLoadingFalse, setLoadingTrue } = LoadingReducer.actions;
