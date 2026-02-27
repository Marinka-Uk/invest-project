import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import uiReducer from "./uiSlice";
import { authReducer } from "./authSlice";


export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    ui: uiReducer,
     auth: authReducer, 
  },
});
