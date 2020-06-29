import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as fromPostsState from './state';
import { Post, PostsState } from 'src/app/core/models/post.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from './state/index';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  loading$: Observable<boolean>;
  posts$: Observable<{ list: Post[], error: boolean }>;
  keyword: string;

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {

    this.loading$ = this.store.pipe(select(fromPostsState.selectLoader));
    this.posts$ = this.store.pipe(select(fromPostsState.selectPosts));

  }

  getFilteredPosts(posts: Post[]) {
    if (this.keyword == null || this.keyword == '') {
      return posts;
    } else {
      return posts.filter(
        (post) => {
          return post.title.includes(this.keyword) || post.body.includes(this.keyword);
        }
      )
    }
  }

}
