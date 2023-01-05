import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-profile-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      profile-card works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent {

}
