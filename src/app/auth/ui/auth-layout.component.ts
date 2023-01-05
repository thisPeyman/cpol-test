import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'cpol-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, LetModule],
  template: `
    <main class="w-screen h-screen flex flex-col py-8 px-9">
      <img
        src="assets/images/logo.png"
        alt="Logo"
        class="w-12 h-12 self-center"
      />
      <div class="mt-20">
        <h2 class="font-bold text-2xl">خوش آمدید</h2>
        <p class="font-light">ورود به حساب کاربری</p>
      </div>
      <div class="mt-7">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthLayoutComponent {}
