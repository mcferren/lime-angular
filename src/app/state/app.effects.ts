import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ServiceAuth } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.login),
            mergeMap(
                (action) => {
                    return this.authService.login(action.email).pipe(
                        map((response) => {
                            if (response.length == 0) {
                                return actions.loginFail();
                            } else {
                                this.router.navigate(['dashboard/posts/' + response[0].id]);
                                this.authService.saveUser(response[0]);
                                return actions.loginSuccess({ user: response[0] });
                            }
                        }),
                        catchError((error) => {
                            return of(actions.loginFail())
                        })
                    )
                }
            )
        )
    )

    constructor(
        private actions$: Actions,
        private authService: ServiceAuth,
        private router: Router
    ) { }

}