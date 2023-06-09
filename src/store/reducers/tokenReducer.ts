import { createSlice } from '@reduxjs/toolkit';

interface TokenState {
  token: string | null;
  refreshToken: string | null;
  ttl: string | null;
}

const initialState: TokenState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refresh') : null,
  ttl: typeof window !== 'undefined' ? localStorage.getItem('ttl') : null,
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
    setTokenExpiredTime: (state, ttl) => {
      state.ttl = ttl.payload;
      localStorage.setItem('ttl', ttl.payload);
    },
  },
});

export default TokenReducer.reducer;
export const { setToken, setRefreshToken, setTokenExpiredTime } = TokenReducer.actions;
