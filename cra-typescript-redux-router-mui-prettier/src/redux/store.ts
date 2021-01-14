import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authenticationSlice";

const rootReducer = {
  authentication: authenticationReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
