import { Comment } from './comment.model';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments?: Comment[];
}

export interface PostsState {
    posts: {
        list: Post[];
        error: boolean;
    }
    loading: boolean;
}