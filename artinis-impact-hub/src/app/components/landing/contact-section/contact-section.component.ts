import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

interface CompanyInfo {
  icon: string; // icon name used in ngSwitch
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact-section',
  imports: [NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  companyInfo: CompanyInfo[] = [
    {
      icon: 'users',
      label: 'Team',
      value: 'AI/ML Specialists & Domain Experts',
    },
    {
      icon: 'server',
      label: 'Infrastructure',
      value: 'Edge & Cloud HPC Systems',
    },
    {
      icon: 'award',
      label: 'Compliance',
      value: 'GDPR, HIPAA, ISO 27001',
    },
  ];

  scrollToDemo() {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
