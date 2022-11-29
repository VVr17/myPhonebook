import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from 'types/contacts';

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './contactsOperations';

// Define a type for the slice state
interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: string | null;
}

// Define the initial state using that type
const contactsInitialState: IContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: IContactsState) => {
  state.isLoading = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, { payload }: PayloadAction<IContact[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = payload;
        }
      )
      .addCase(
        addContact.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(payload);
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(({ id }) => id === payload.id);
          state.items.splice(index, 1);
        }
      )
      .addCase(
        updateContact.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(({ id }) => id === payload.id);
          state.items.splice(index, 1, payload);
        }
      )

      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(updateContact.pending, handlePending)

      .addCase(fetchContacts.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
