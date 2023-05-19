import { createSlice } from '@reduxjs/toolkit';

interface TokenState {
  token: string | null;
  refreshToken: string | null;
}

const initialState: TokenState = {
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refresh') || null,
};

export const TokenReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, token) => {
      state.token = token.payload;
      localStorage.setItem('token', token.payload);
    },
    setRefreshToken: (state, token) => {
      state.token = token.payload;
      localStorage.setItem('refresh', token.payload);
    },
  },
});

export default TokenReducer.reducer;
export const { setToken, setRefreshToken } = TokenReducer.actions;
