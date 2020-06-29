import { createAction, props } from "@ngrx/store";
import { Post } from "../../../core/models/post.model";

/* ACTIONS FOR FETCHING POSTS */

export const startLoader = createAction(
    '[Posts] Start Loader'
);

export const fetchPostsSuccess = createAction(
    '[Posts] Fetch Posts Success',
    props<{ posts: Post[] }>()
);

export const fetchPostsFail = createAction(
    '[Posts] Fetch Posts Fail'
);