import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/useSlice'; // Import the userReducer
import recipeReducer from './features/recipeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer, // This will handle the user state
    recipes: recipeReducer,
  },
});
