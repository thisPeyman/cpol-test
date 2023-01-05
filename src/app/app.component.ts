import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthActions } from './auth/data-access/store/auth.actions';
import { AuthFacade } from './auth/data-access/store/auth.facade';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.authFacade.dispatch(AuthActions.getUser());
  }
}
