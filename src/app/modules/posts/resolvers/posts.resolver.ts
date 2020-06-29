import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../state/index';
import * as actions from '../state/posts.actions';
import { ServicePosts } from 'src/app/core/services/posts.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostsResolverService implements Resolve<Observable<any>>  {

    constructor(
        private store: Store<RootState>,
        private postsService: ServicePosts
    ) { } 

    resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params;
        return this.postsService.getUserPosts(id).pipe(
            tap((response) => {
                this.store.dispatch(actions.fetchPostsSuccess({ posts: response }));
            })
        );
    }
}