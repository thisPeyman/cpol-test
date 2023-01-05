import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-profile-edit-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      profile-edit-form works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditFormComponent {

}
