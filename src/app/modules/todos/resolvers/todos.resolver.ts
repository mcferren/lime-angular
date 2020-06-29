import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../state/index';
import * as actions from '../state/todos.actions';
import { ServiceTodos } from 'src/app/core/services/todos.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodosResolverService implements Resolve<Observable<any>>  {

    constructor(
        private store: Store<RootState>,
        private todosService: ServiceTodos
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params; 
        return this.todosService.getTodoList(id).pipe(
            tap((response) => {
                this.store.dispatch(actions.fetchTodosSuccess({ todos: response }));
            })
        )
    }
}