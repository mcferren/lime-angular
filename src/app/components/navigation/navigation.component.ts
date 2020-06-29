import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';
import { RootState } from 'src/app/core/models/app-state.model';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
 
  user$: Observable<User>;

  constructor(
    private router: Router,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser));
  }

  onLogout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('USER');
  }



}
