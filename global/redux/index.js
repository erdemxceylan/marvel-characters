import { configureStore } from '@reduxjs/toolkit';
import charReducer from './characters';

const store = configureStore({
   reducer: {
      chars: charReducer
   },
});

export default store;
