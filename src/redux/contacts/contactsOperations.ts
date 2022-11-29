import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IContact } from 'types/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data as IContact[];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact: Omit<IContact, 'id'>, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      toast.success(
        `${data.name.toUpperCase()} successfully added to CONTACTS`
      );
      return data as IContact;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      toast.info(`${data.name.toUpperCase()} deleted from CONTACTS`);
      return data as IContact;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ name, number, id }: IContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      toast.info(`${data.name.toUpperCase()} successfully updated`);
      return data as IContact;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);
