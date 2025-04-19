import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-cta',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss'
})
export class ContactCtaComponent {

}
