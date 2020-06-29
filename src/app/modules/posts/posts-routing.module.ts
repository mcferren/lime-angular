import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsResolverService } from './resolvers/posts.resolver';

import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: ':id', component: PostsComponent, resolve: { settings: PostsResolverService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
