import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './auth-operation';

const initState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initState,
  extraReducers: {
    [register.fulfilled](state, action) {},
    [login.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
