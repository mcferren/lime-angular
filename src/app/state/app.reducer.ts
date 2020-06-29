import { AppState } from "../core/models/app-state.model";
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './app.actions';

const initialState: AppState = {
    loading: false,
    user: localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : null,
    loginError: false
}

const appReducer = createReducer(
    initialState,

    on(actions.startLoader, (state) => {
        return {
            ...state,
            loading: true
        }
    }),

    on(actions.loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
            loginError: false,
            loading: false
        }
    }),

    on(actions.loginFail, (state) => {
        return {
            ...state,
            user: null,
            loginError: true,
            loading: false
        }
    }),

)

export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}