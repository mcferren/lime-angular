import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { LOGIN } from '../constants/urls';

@Injectable({
    providedIn: 'root'
}) 
export class ServiceAuth {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    login(email: string): Observable<User[]> {
        return this.http.get<User[]>(
            LOGIN
            + email
        );
    }

    logout(): void {
        this.router.navigate(['login']);
    }

    saveUser(user: User){
        localStorage.setItem('USER', JSON.stringify(user));
    }

    getUser(): User{
        let user = localStorage.getItem('USER');
        return user ? JSON.parse(user) : null;
    }

}