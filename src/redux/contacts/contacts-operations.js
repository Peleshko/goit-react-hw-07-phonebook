import * as contactsAPI from '../../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH, ADD, DELETE } from './contacts-types';

export const fetchContacts = createAsyncThunk(
  FETCH,
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  ADD,
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.addContact(name, number);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  DELETE,
  async (id, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.deleteContact(id);
      return contact.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
