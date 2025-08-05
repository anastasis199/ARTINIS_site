import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'About', href: '#contact' },
  ];

  solutions = [
    { name: 'AI + IoT Systems', href: '#services' },
    { name: 'LLM Assistants', href: '#services' },
    { name: 'Computer Vision', href: '#services' },
    { name: 'Data Strategy & MLOps', href: '#services' },
  ];

  industries = [
    { name: 'Agriculture', href: '#industries' },
    { name: 'Livestock', href: '#industries' },
    { name: 'Healthcare', href: '#industries' },
    { name: 'Public Sector', href: '#industries' },
  ];

  scrollToSection(href: string) {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
