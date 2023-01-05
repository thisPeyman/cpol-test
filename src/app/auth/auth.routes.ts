import { Routes } from '@angular/router';
import AuthLayoutComponent from './ui/auth-layout.component';

export const AuthRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./feature/login.component'),
      },
    ],
  },
];
