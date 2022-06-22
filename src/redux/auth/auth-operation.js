import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('You have incorrectly filled in form. Please try again. ', {
      position: 'top-center',
      autoClose: 5000,
    });
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('You have incorrectly filled in form. Please try again. ', {
      position: 'top-center',
      autoClose: 5000,
    });
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    toast.error('You have a problem. Please try again ', {
      position: 'top-center',
      autoClose: 5000,
    });
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenLS = state.auth.token;
    if (tokenLS === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(tokenLS);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('You have a problem. Please try again ', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  }
);
