import { on, createReducer, Action } from "@ngrx/store";
import * as actions from './todos.actions';
import { TodosState, Todo } from "../../../core/models/todo.model";


const initialState: TodosState = {
    loading: false,
    todos: {
        list: null,
        error: false
    }
}

const todosReducer = createReducer(
    initialState,

    on(actions.startLoader, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(actions.fetchTodosSuccess, (state, action) => {
        return {
            ...state,
            todos: {
                list: action.todos,
                error: false
            },
            loading: false
        }
    }),

    on(actions.fetchTodosFail, (state) => {
        return {
            ...state,
            todos: {
                list: [],
                error: true
            },
            loading: false
        }
    }),
);

export function reducer(state: TodosState | undefined, action: Action) {
    return todosReducer(state, action);
}