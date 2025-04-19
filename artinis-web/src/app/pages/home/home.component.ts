import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { FeaturesSectionComponent } from "./features-section/features-section.component";
import { PlatformSectionComponent } from "./platform-section/platform-section.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { PartnersComponent } from "./partners/partners.component";
import { ContactCtaComponent } from "./contact-cta/contact-cta.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, FeaturesSectionComponent, PlatformSectionComponent, TestimonialsComponent, PartnersComponent, ContactCtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
