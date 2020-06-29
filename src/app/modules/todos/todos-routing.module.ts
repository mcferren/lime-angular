import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosResolverService } from './resolvers/todos.resolver';

import { TodosComponent } from './todos.component';

const routes: Routes = [
  { path: ':id', component: TodosComponent, resolve: { settings: TodosResolverService }  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
