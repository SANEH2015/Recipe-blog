import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/recipes';

// Thunk to add a new recipe
export const addRecipe = createAsyncThunk(
  'recipes/add',
  async (recipe, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, recipe);
      return response.data; // Return the newly created recipe
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Failed to add recipe. Please try again.'
      );
    }
  }
);

// Thunk to fetch all recipes
export const fetchRecipes = createAsyncThunk(
  'recipes/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Return the list of recipes
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch recipes. Please try again.'
      );
    }
  }
);

// Initial state
const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

// Recipe slice
const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null; // Reset the error state
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Recipes
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state while loading
      })
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.recipes = payload; // Populate recipes with the fetched data
      })
      .addCase(fetchRecipes.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload; // Store the error message
      })
      // Add Recipe
      .addCase(addRecipe.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state while loading
      })
      .addCase(addRecipe.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.recipes.push(payload); // Add the new recipe to the state
      })
      .addCase(addRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload; // Store the error message
      });
  },
});

// Export the reducer and actions
export const { clearError } = recipeSlice.actions;
export default recipeSlice.reducer;
