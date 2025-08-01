import { NgClass, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

interface Industry {
  icon: string; // icon name (we will map to SVG in template)
  name: string;
  title: string;
  description: string;
  features: string[];
  metrics: string[];
  caseStudy: string;
}

@Component({
  selector: 'app-industries-section',
  imports: [NgFor, NgSwitch, NgSwitchCase, NgClass],
  templateUrl: './industries-section.component.html',
  styleUrl: './industries-section.component.scss'
})
export class IndustriesSectionComponent {
  activeTab = 0;

  industries: Industry[] = [
    {
      icon: 'wheat',
      name: 'Agriculture',
      title: 'Precision Agriculture & Crop Intelligence',
      description:
        'Transform farming with AI-powered insights that optimize yield, reduce resource consumption, and enable sustainable agriculture practices.',
      features: [
        'Crop health monitoring using satellite and drone imagery',
        'Soil condition analysis with IoT sensor networks',
        'Weather prediction models for optimal planting',
        'Automated irrigation systems with ML optimization',
        'Pest and disease early detection systems',
      ],
      metrics: [
        '40% reduction in water usage',
        '25% increase in crop yield',
        '60% faster pest detection',
      ],
      caseStudy:
        'Helped farms reduce water consumption by 40% while increasing yield through precision irrigation systems.',
    },
    {
      icon: 'beef',
      name: 'Livestock',
      title: 'Smart Livestock Management',
      description:
        'Revolutionize animal agriculture with AI systems that monitor health, optimize feeding, and ensure animal welfare.',
      features: [
        'Real-time health monitoring with wearable sensors',
        'Automated feeding optimization based on individual needs',
        'Behavioral analysis for early illness detection',
        'Breeding optimization through genetic analysis',
        'Environmental control systems for optimal conditions',
      ],
      metrics: [
        '30% reduction in veterinary costs',
        '15% improvement in feed efficiency',
        '50% faster health issue detection',
      ],
      caseStudy:
        'Implemented AI health monitoring reducing veterinary costs by 30% across 500+ livestock operations.',
    },
    {
      icon: 'heart',
      name: 'Healthcare',
      title: 'Clinical AI & Medical Diagnostics',
      description:
        'Advance healthcare outcomes with GDPR-compliant AI solutions that assist diagnosis, treatment planning, and patient monitoring.',
      features: [
        'Medical imaging analysis for faster diagnostics',
        'Clinical decision support systems',
        'Patient monitoring with predictive analytics',
        'Drug discovery acceleration through ML',
        'Personalized treatment recommendations',
      ],
      metrics: [
        '70% faster diagnostic processing',
        '85% accuracy in early detection',
        '100% GDPR compliance',
      ],
      caseStudy:
        'Deployed AI diagnostic tools reducing analysis time by 70% while maintaining 99% accuracy in clinical settings.',
    },
    {
      icon: 'building2',
      name: 'Public Sector',
      title: 'Smart City & Government Solutions',
      description:
        'Enable data-driven governance with AI systems that improve public services, optimize resource allocation, and enhance citizen experiences.',
      features: [
        'Traffic optimization and smart mobility systems',
        'Environmental monitoring and pollution control',
        'Public safety and emergency response optimization',
        'Energy grid management and efficiency',
        'Citizen service automation and chatbots',
      ],
      metrics: [
        '35% reduction in traffic congestion',
        '50% faster emergency response',
        '40% energy savings',
      ],
      caseStudy:
        'Implemented smart traffic systems reducing congestion by 35% and emergency response times by 50%.',
    },
  ];

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  scrollToDemo() {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
