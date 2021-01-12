import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import authenticationReducer from "./reducers/authenticationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
