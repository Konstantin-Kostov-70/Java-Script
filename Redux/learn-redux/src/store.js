import { configureStore } from '@reduxjs/toolkit';
import userReducer  from './features/user'
import themeReducer from './features/theme'

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    },
  });

export default store