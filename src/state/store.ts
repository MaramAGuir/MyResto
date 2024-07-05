import { configureStore } from "@reduxjs/toolkit";
import reserveCounterReducer from "./reserveCounter/reserveCounterSlice";
import cartReducer from './Cart/cartSlice';


export const store = configureStore({
  reducer: {
    reserveCounter: reserveCounterReducer ,
    cart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch ;