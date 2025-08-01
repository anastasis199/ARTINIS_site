import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}


@Component({
  selector: 'app-services-section',
  imports: [NgSwitch, NgSwitchCase, NgFor],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'cpu',
      title: 'AI + IoT Systems',
      description:
        'Edge-ready AI solutions that process sensor data in real-time, enabling immediate decision-making for agriculture, livestock, and environmental monitoring.',
      features: ['Real-time processing', 'Edge deployment', 'Sensor integration', 'Predictive analytics'],
    },
    {
      icon: 'brain',
      title: 'LLM Assistants',
      description:
        'Specialized language models trained on domain-specific data for healthcare, agriculture, and technical applications with GDPR compliance.',
      features: ['Domain expertise', 'GDPR compliance', 'Custom training', 'Multi-language support'],
    },
    {
      icon: 'camera',
      title: 'Computer Vision',
      description:
        'Advanced visual recognition systems for crop monitoring, livestock health assessment, and quality control in industrial applications.',
      features: ['Object detection', 'Health monitoring', 'Quality assessment', 'Automated inspection'],
    },
    {
      icon: 'database',
      title: 'Data Strategy & MLOps',
      description:
        'Comprehensive data pipeline design and ML operations for scalable, maintainable AI systems in production environments.',
      features: ['Pipeline design', 'Model deployment', 'Performance monitoring', 'Scalable architecture'],
    },
  ];

  scrollToDemo() {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
