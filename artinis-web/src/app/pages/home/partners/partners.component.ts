import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-partners',
  imports: [NgFor, TranslatePipe],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partnerLogos = [
    'assets/partners/partner1.png',
    'assets/partners/partner2.png',
    'assets/partners/partner3.png'
  ];
}
