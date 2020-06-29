import { createAction, props } from "@ngrx/store";
import { Todo } from "../../../core/models/todo.model";

export const startLoader = createAction(
    '[Todos] Start Loader'
);

export const fetchTodosSuccess = createAction(
    '[Todos] Fetch Todos Success',
    props<{ todos: Todo[] }>()
);

export const fetchTodosFail = createAction(
    '[Todos] Fetch Todos Fail'
);