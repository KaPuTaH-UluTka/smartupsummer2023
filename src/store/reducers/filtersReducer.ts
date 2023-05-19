import { createSlice } from '@reduxjs/toolkit';
import { CataloguesResponse } from '@/utils/types';

interface FiltersState {
  currentCatalog: CataloguesResponse | undefined;
  paymentFrom: number | undefined;
  paymentTo: number | undefined;
  keyword: string | undefined;
}

const initialState: FiltersState = {
  currentCatalog: undefined,
  paymentFrom: undefined,
  paymentTo: undefined,
  keyword: undefined,
};

export const FiltersReducer = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrentCatalog: (state, currentCatalog) => {
      state.currentCatalog = currentCatalog.payload;
    },
    setPaymentFrom: (state, paymentFrom) => {
      state.paymentFrom = paymentFrom.payload;
    },
    setPaymentTo: (state, paymentTo) => {
      state.paymentTo = paymentTo.payload;
    },
    setKeyword: (state, keyword) => {
      state.keyword = keyword.payload;
    },
    resetFilters: (state) => {
      state.currentCatalog = undefined;
      state.paymentFrom = undefined;
      state.paymentTo = undefined;
    },
  },
});

export default FiltersReducer.reducer;
export const { setCurrentCatalog, setPaymentFrom, setPaymentTo, setKeyword, resetFilters } =
  FiltersReducer.actions;
