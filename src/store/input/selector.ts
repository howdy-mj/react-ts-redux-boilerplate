import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

const selectInputState = (state: RootState) => state.input;

export const inputValue = createSelector(
  selectInputState,
  ({ value }) => value
);
