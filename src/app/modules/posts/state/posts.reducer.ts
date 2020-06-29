import { PostsState } from "../../../core/models/post.model";
import { on, createReducer, Action } from "@ngrx/store";
import * as actions from './posts.actions';


const initialState: PostsState = {
    loading: false,
    posts: {
        list: null,
        error: false
    }
}

const postsReducer = createReducer(
    initialState,

    on(actions.startLoader, (state) => {
        return {
            ...state,
            loading: true
        }
    }),

    on(actions.fetchPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: {
                list: action.posts,
                error: false
            },
            loading: false
        }
    }),

    on(actions.fetchPostsFail, (state) => {
        return {
            ...state,
            posts: {
                list: [],
                error: true
            },
            loading: false
        }
    }),
);

export function reducer(state: PostsState | undefined, action: Action) {
    return postsReducer(state, action);
}