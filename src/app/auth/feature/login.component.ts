import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../ui/auth-form.component';
import { AuthFacade } from '../data-access/store/auth.facade';
import { AuthActions } from '../data-access/store/auth.actions';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'cpol-login',
  standalone: true,
  imports: [CommonModule, AuthFormComponent, LetModule],
  template: ` <ng-container *ngrxLet="{ isLoading: isLoading$ } as vm">
    <cpol-auth-form
      [isLoading]="vm.isLoading"
      (submitAuth)="login($event)"
    ></cpol-auth-form>
  </ng-container>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  isLoading$ = this.authFacade.isLoading$;

  constructor(private authFacade: AuthFacade) {}

  login(credentials: { username: string; password: string }) {
    this.authFacade.dispatch(AuthActions.login(credentials));
  }
}
