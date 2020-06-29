import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { mergeMap, map } from 'rxjs/operators';
import { Comment } from '../models/comment.model';
import { FETCH_POSTS, FETCH_COMMENTS } from '../constants/urls';

@Injectable({
    providedIn: 'root'
})
export class ServicePosts {

    constructor(private http: HttpClient) { }

    getUserPosts(userId: number): Observable<Post[]>{
        return this.http.get<Post[]>(
            FETCH_POSTS + userId
        ).pipe(
            mergeMap(
                (posts) => {
                    return this.http.get<Comment[]>(
                        FETCH_COMMENTS
                    ).pipe(
                        map(
                            (comments) => {
                                comments = comments.filter(
                                    (comment: Comment) => {
                                        let index = posts.findIndex((post) => {
                                            return comment.postId == post.id;
                                        })
                                        return index != -1;
                                    }
                                );
                                posts.forEach(
                                    (post) => {
                                        post.comments = [];
                                    }
                                )
                                comments.forEach(
                                    (comment) => {
                                        let post = posts.find((item) => item.id == comment.postId);
                                        post.comments.push(comment);
                                    }
                                )
                                return posts;
                            }
                        )
                    )
                }
            )
        )
    }

}