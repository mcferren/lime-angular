export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodosState {
    todos: {
        list: Todo[];
        error: boolean;
    }
    loading: boolean;
}