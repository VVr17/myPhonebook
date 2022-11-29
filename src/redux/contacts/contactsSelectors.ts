import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';
import { selectFilter } from 'redux/filter/filterSelectors';

const selectContacts = (state: RootState) => state.contacts.items;
const selectLoading = (state: RootState) => state.contacts.isLoading;
const selectError = (state: RootState) => state.contacts.error;
const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const contactsSelectors = {
  selectContacts,
  selectLoading,
  selectError,
  selectFilteredContacts,
};
