import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/user/signup`, credentials);
    return data;
  } catch (error) {}
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/user/login`, credentials);
    return data;
  } catch (error) {}
});
