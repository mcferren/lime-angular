import { createSelector } from '@ngrx/store';
import { TodosState } from '../../../core/models/todo.model';

export class RootState {
    todos: TodosState;
}

export const selectTodosFeature = (state: RootState) => state.todos;

/* CREATING SELECTORS */

export const selectLoader = createSelector(
    selectTodosFeature,
    (state) => {
        return state.loading;
    }
);

export const selectTodos = createSelector(
    selectTodosFeature,
    (state) => {
        return state.todos;
    }
);