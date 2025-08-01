import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { IndustriesSectionComponent } from "./industries-section/industries-section.component";
import { MethodologySectionComponent } from "./methodology-section/methodology-section.component";
import { InsightsSectionComponent } from "./insights-section/insights-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { DemoSectionComponent } from "./demo-section/demo-section.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, HeroSectionComponent, ServicesSectionComponent, IndustriesSectionComponent, MethodologySectionComponent, InsightsSectionComponent, ContactSectionComponent, DemoSectionComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
