import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { usersReducer } from "./slice/user";

const store = configureStore({
  reducer: { user: usersReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
