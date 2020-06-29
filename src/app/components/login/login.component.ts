import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromAppState from '../../state';
import * as fromAppActions from '../../state/app.actions';
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/core/models/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email])
    });

    this.loading$ = this.store.pipe(select(fromAppState.selectLoader));
    this.error$ = this.store.pipe(select(fromAppState.selectLoginError));

  }

  onSubmit() {
    let email: string = this.loginForm.value.username;
    this.store.dispatch(fromAppActions.startLoader());
    this.store.dispatch(fromAppActions.login({ email }));
  }

}
