import { PostsState } from '../../../core/models/post.model';
import { createSelector } from '@ngrx/store';

export class RootState {
    posts: PostsState;
}

export const selectPostsFeature = (state: RootState) => state.posts;

/* CREATING SELECTORS */

export const selectLoader = createSelector(
    selectPostsFeature,
    (state) => {
        return state.loading;
    }
);

export const selectPosts = createSelector(
    selectPostsFeature,
    (state) => {
        return state.posts;
    }
);