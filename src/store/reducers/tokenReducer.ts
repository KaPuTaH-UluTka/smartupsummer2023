import { createSlice } from '@reduxjs/toolkit';

interface TokenState {
  token: string | null;
  refreshToken: string | null;
}

const initialState: TokenState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refresh') : null,
};

export const TokenReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, token) => {
      state.token = token.payload;
      localStorage.setItem('token', token.payload);
    },
    setRefreshToken: (state, refreshToken) => {
      state.refreshToken = refreshToken.payload;
      localStorage.setItem('refresh', refreshToken.payload);
    },
  },
});

export default TokenReducer.reducer;
export const { setToken, setRefreshToken } = TokenReducer.actions;
