import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const charSlice = createSlice({
   name: 'characters',
   initialState,
   reducers: {
      delete(state, action) {
         const updatedConsumedNutrients = state.consumedNutrients.filter(nutrient => nutrient.id !== action.payload.id);
         state.consumedNutrients = updatedConsumedNutrients;
         state.totalCalories -= action.payload.calories;
         state.totalProteins -= action.payload.proteins;
         state.isEmpty = state.consumedNutrients.length > 0 ? false : true;
      },
      increase(state, action) { state.counter += action.payload; },
   }
});

export const charActions = charSlice.actions;
export default charSlice.reducer;
