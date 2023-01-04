import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout.component';

export const SHELL_ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [] },
];
