import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-profile-edit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      profile-edit works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent {

}
