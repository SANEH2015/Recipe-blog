// src/redux/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      // Check if email already exists
      const response = await axios.get(`${API_URL}?email=${userData.email}`);
      
      if (response.data.length > 0) {
        // Email already exists, return custom error message
        return rejectWithValue('Email already registered. Please sign in.');
      }

      // If email doesn't exist, register the user
      const registerResponse = await axios.post(API_URL, userData);
      return registerResponse.data;
    } catch (error) {
      // Handle API error or connection issue
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for signing in a user
export const signInUser = createAsyncThunk(
  'user/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?email=${email}`);
      const user = response.data[0];

      if (user && user.password === password) {
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload; // Display the error message
      })
      // Sign In User
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
