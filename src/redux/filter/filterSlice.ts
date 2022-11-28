import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filterInitialState: string = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(_, { payload }: PayloadAction<string>) {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
