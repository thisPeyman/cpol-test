import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cpol-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzDividerModule,
  ],
  template: `
    <form nz-form [formGroup]="form" (ngSubmit)="submitForm()">
      <nz-form-item>
        <label for="username"
          >نام کاربری <span class="text-red-500">*</span></label
        >
        <nz-form-control nzErrorTip="لطفا نام کاربری خود را وارد کنید">
          <nz-input-group>
            <input
              type="text"
              nz-input
              formControlName="username"
              id="username"
            />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <label for="password"
          >کلمه عبور<span class="text-red-500">*</span></label
        >
        <nz-form-control nzErrorTip="لطفا کلمه عبور خود را وارد کنید">
          <nz-input-group>
            <input
              type="password"
              nz-input
              formControlName="password"
              id="password"
            />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>

      <div class="flex items-center justify-between">
        <button
          [nzLoading]="isLoading"
          nzSize="large"
          nz-button
          nzType="primary"
          type="submit"
        >
          ورود
        </button>
        <a nz-button nzType="link">فراموشی رمز عبور</a>
      </div>
      <nz-divider></nz-divider>
      <p>
        هنوز ثبت نام نکرده‌اید؟
        <a class="px-0" nz-button nzType="link">ایجاد حساب کاربری</a>
      </p>
    </form>
  `,
  styles: [
    `
      label {
        @apply pb-1;
      }

      nz-form-item {
        @apply flex flex-col mb-10;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  form = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')],
    ],
    password: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')],
    ],
  });

  @Output() submitAuth = new EventEmitter();
  @Input() isLoading = false;

  constructor(private fb: FormBuilder) {}

  submitForm() {
    if (this.form.invalid) return;

    this.submitAuth.emit(this.form.value);
  }
}
