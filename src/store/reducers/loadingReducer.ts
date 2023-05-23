import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  isGlobalLoading: boolean;
}

const initialState: LoadingState = {
  isGlobalLoading: false,
};

export const LoadingReducer = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingFalse: (state) => {
      state.isGlobalLoading = false;
    },
    setLoadingTrue: (state) => {
      state.isGlobalLoading = true;
    },
  },
});

export default LoadingReducer.reducer;
export const { setLoadingFalse, setLoadingTrue } = LoadingReducer.actions;
