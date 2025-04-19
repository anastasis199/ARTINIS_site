import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-platform-section',
  imports: [TranslatePipe],
  templateUrl: './platform-section.component.html',
  styleUrl: './platform-section.component.scss'
})
export class PlatformSectionComponent {

}
