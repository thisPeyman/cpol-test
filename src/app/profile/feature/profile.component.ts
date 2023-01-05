import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      profile works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

}
