import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContacts, addContact } from './contacts-operation';

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      return (state = [...action.payload]);
    },
    [deleteContacts.fulfilled](state, action) {
      return state.filter(({ id }) => {
        return id !== action.meta.arg;
      });
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return (state = [...state, payload]);
    },
  },
});

export const { addItems, deleteItems } = contactsReducer.actions;
