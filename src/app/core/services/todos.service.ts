import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { FETCH_TODOS } from '../constants/urls';

@Injectable({
    providedIn: 'root'
})
export class ServiceTodos {

    constructor(private http: HttpClient) { }

    getTodoList(userId: number): Observable<Todo[]> {
        return this.http.get<Todo[]>(
            FETCH_TODOS + userId
        );
    }

}