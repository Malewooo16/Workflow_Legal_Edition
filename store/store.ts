import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";
import { RootState } from "../utilities/cartTypes";
import counterSlice from "./counterSlice";
import themeSlice from "./themeSlice";

// Create the Redux store

const rootReducer = combineReducers({
  cart: cartSlice,
  count:counterSlice,
  theme:themeSlice,
});

const persistConfig = {
  timeout: 500,
  key: "wma-root", // Key used to store data in localStorage. Change it if needed.
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
