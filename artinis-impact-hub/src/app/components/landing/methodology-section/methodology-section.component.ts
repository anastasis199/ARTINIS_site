import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

interface Step {
  icon: string; // icon name, mapped in template to SVG
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}


@Component({
  selector: 'app-methodology-section',
  imports: [NgFor, NgSwitch, NgSwitchCase, NgIf],
  templateUrl: './methodology-section.component.html',
  styleUrl: './methodology-section.component.scss'
})
export class MethodologySectionComponent {
  steps: Step[] = [
    {
      icon: 'radio',
      title: 'SENSE',
      subtitle: 'Data Collection & Integration',
      description:
        'Gather multi-modal data from IoT sensors, imaging systems, clinical devices, and external sources with real-time processing capabilities.',
      details: [
        'IoT sensor networks',
        'Satellite & drone imagery',
        'Clinical monitoring devices',
        'Environmental data feeds',
      ],
    },
    {
      icon: 'brain',
      title: 'DECIDE',
      subtitle: 'AI-Powered Analysis',
      description:
        'Apply physics-aware deep learning, specialized LLMs, and computer vision models to extract insights and generate actionable recommendations.',
      details: [
        'Physics-informed neural networks',
        'Domain-specific LLMs',
        'Computer vision analysis',
        'Predictive modeling',
      ],
    },
    {
      icon: 'zap',
      title: 'ACT',
      subtitle: 'Real-World Implementation',
      description:
        'Deploy edge-ready solutions that enable immediate action through automated systems, user interfaces, and integration with existing workflows.',
      details: [
        'Edge deployment',
        'Automated control systems',
        'User-friendly interfaces',
        'Workflow integration',
      ],
    },
  ];
}
