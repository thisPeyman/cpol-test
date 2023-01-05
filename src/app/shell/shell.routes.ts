import { Routes } from '@angular/router';
import {
  AuthGuard,
  NonAuthGuard,
} from '../auth/data-access/services/auth.guards';
import { LayoutComponent } from './ui/layout.component';

export const SHELL_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.routes').then((m) => m.AuthRoutes),
    canActivate: [NonAuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [],
    canActivate: [AuthGuard],
  },
];
