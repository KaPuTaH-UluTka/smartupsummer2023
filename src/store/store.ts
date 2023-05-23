import tokenReducer from '@/store/reducers/tokenReducer';
import cataloguesReducer from '@/store/reducers/cataloguesReducer';
import { superJobApi } from '@/store/api/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from '@/store/reducers/vacanciesReducer';
import filtersReducer from '@/store/reducers/filtersReducer';
import loadingReducer from '@/store/reducers/loadingReducer';

const rootReducer = combineReducers({
  tokenReducer,
  cataloguesReducer,
  vacanciesReducer,
  filtersReducer,
  loadingReducer,
  [superJobApi.reducerPath]: superJobApi.reducer,
});

export const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(superJobApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
