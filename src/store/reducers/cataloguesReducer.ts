import { createSlice } from '@reduxjs/toolkit';
import { CataloguesResponse } from '@/utils/types';

interface CataloguesState {
  catalogues: CataloguesResponse[] | null;
}

const initialState: CataloguesState = {
  catalogues: null,
};

export const CataloguesReducer = createSlice({
  name: 'catalogues',
  initialState,
  reducers: {
    setCatalogues: (state, catalogues) => {
      state.catalogues = catalogues.payload;
    },
  },
});

export default CataloguesReducer.reducer;
export const { setCatalogues } = CataloguesReducer.actions;
