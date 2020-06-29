import { User } from './user.model';

export class AppState {
    loading: boolean;
    user: User;
    loginError: boolean;
}

export class RootState {
    app: AppState
}