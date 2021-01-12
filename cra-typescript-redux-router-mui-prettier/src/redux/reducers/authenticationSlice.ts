import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface AuthenticationState {
  value: string;
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  value: "UNAUTHENTICATED",
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    authenticate: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "AUTHENTICATED";
      state.isAuthenticated = true;
    },
    unauthenticate: (state) => {
      state.value = "UNAUTHENTICATED";
      state.isAuthenticated = false;
    },
  },
});

export const { authenticate, unauthenticate } = authenticationSlice.actions;

export const authenticateAsync = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(authenticate());
  }, 2000);
};

export const unauthenticateAsync = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(unauthenticate());
  }, 2000);
};

export default authenticationSlice.reducer;
