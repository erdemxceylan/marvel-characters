import { createSlice } from '@reduxjs/toolkit';

const initialState = { characters: [], offset: 0 };

const charSlice = createSlice({
   name: 'characters',
   initialState,
   reducers: {
      update(state, action) {
         state.characters = [...state.characters, ...action.payload.newCharacters];
         state.offset += 30;
      }
   }
});

export const { update } = charSlice.actions;
export default charSlice.reducer;
