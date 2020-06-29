import { createAction, props } from '@ngrx/store';
import { User } from '../core/models/user.model';

export const startLoader = createAction(
    '[App] Start Loader'
);

/* ACTIONS FOR LOGIN */

export const login = createAction(
    '[App] Login',
    props<{ email: string }>()
);

export const loginSuccess = createAction(
    '[App] Login Success',
    props<{ user: User }>()
);

export const loginFail = createAction(
    '[App] Login Fail'
);





