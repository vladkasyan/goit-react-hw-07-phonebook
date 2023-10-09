import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../components/api/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const contactsItems = await api.getContacts();
      return contactsItems;
    } catch (error) {
      return thunkApi.rejectWithValue(error.code);
    }
  }
);

export const saveContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const contactToAdd = await api.addContact({ name, number });
      return contactToAdd;
    } catch (error) {
      return thunkApi.rejectWithValue(error.code);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await api.deleteContact(id);
      return contactToDelete;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
