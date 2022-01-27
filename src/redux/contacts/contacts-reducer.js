import { createSlice } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', error: null },
  reducers: {
    [actions.filterContact]: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
