import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromTodosState from './state';
import { Observable } from 'rxjs';
import { RootState } from './state/index';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todos: Todo[] = [];
  loading$: Observable<boolean>;
  error: boolean;
  userId: number;
  displayCompleted: boolean = true;

  constructor(
    private router: Router,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {

    this.loading$ = this.store.pipe(select(fromTodosState.selectLoader));

    this.store.pipe(
      select(fromTodosState.selectTodos)
    ).subscribe(
      (todos) => {
        this.error = todos.error;
        if (todos.list) {
          if (this.todos.length == 0) {
            this.todos = todos.list.map((item) => {
              return {
                ...item
              }
            });
          }
        }
      }
    );

  }

  getTodos() {
    if (this.displayCompleted) {
      return this.todos;
    } else {
      return this.todos.filter((item) => item.completed == false);
    }
  }

}
