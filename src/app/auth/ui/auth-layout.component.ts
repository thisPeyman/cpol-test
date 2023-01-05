import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-auth-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      auth-layout works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {

}
