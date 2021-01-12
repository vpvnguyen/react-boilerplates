import { RootState } from "../store";

export const selectAuthentication = (state: RootState) =>
  state.authentication.value;
