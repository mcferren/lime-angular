import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsResolverService } from './resolvers/albums.resolver';

import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  { path: ':id', component: AlbumsComponent, resolve: { settings: AlbumsResolverService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
