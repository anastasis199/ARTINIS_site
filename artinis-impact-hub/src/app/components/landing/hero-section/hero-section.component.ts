import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  scrollToDemo() {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToMethodology() {
    const element = document.getElementById('methodology');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
