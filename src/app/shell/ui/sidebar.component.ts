import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cpol-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      sidebar works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

}
