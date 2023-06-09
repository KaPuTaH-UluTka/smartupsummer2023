import { createSlice } from '@reduxjs/toolkit';
import { VacancyResponse } from '@/utils/types';

interface VacanciesState {
  vacancies: VacancyResponse[] | null;
  favoriteVacancies: VacancyResponse[] | null;
  totalPages: number | null;
}

const initialState: VacanciesState = {
  vacancies: null,
  favoriteVacancies: null,
  totalPages: null,
};

export const VacanciesReducer = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setVacancies: (state, vacancies) => {
      state.vacancies = vacancies.payload;
    },
    setFavoriteVacancies: (state, favoriteVacancies) => {
      state.favoriteVacancies = favoriteVacancies.payload;
    },
    setPages: (state, totalPages) => {
      state.totalPages = totalPages.payload;
    },
  },
});

export default VacanciesReducer.reducer;
export const { setVacancies, setPages, setFavoriteVacancies } = VacanciesReducer.actions;
