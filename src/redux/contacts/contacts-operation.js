import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common['Authorization'] = '';
//   },
// };

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      // token.set(data.token);
      return data;
    } catch (error) {}
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      const { data } = await axios.post(`/contacts/${id}`);
      // token.set(data.token);
      return data;
    } catch (error) {}
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post(`/contacts`, credentials);
      // token.unset();
      return data;
    } catch (error) {}
  }
);

// export const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {}
// });
