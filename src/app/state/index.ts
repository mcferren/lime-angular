import { RootState } from '../core/models/app-state.model';

/* CREATING SELECTORS */
export const selectLoader = (state: RootState) => state.app.loading;
export const selectUser = (state: RootState) => state.app.user;
export const selectLoginError = (state: RootState) => state.app.loginError;