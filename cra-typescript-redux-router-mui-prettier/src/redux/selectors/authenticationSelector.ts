import { useSelector } from "react-redux";
import { RootState } from "../store";

export const selectAuthentication = (state: RootState) =>
  state.authentication.value;

export const selectIsAuthenticated = (state: RootState) =>
  state.authentication.isAuthenticated;
