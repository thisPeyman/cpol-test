import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-auth-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      auth-form works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {

}
