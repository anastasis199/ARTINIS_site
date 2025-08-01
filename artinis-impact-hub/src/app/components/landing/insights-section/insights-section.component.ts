import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Insight {
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  downloadPdf: boolean;
}


@Component({
  selector: 'app-insights-section',
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './insights-section.component.html',
  styleUrl: './insights-section.component.scss'
})
export class InsightsSectionComponent {
  insights: Insight[] = [
    {
      title: 'Physics-aware deep learning in crops',
      description:
        'Explore how combining domain expertise with deep learning creates more accurate and interpretable AI models for precision agriculture applications.',
      category: 'Agriculture',
      readTime: '8 min read',
      date: '2024-01-15',
      featured: true,
      downloadPdf: true,
    },
    {
      title: 'LLMs on the edge',
      description:
        'Discover strategies for deploying large language models in resource-constrained environments while maintaining performance and compliance.',
      category: 'AI/ML',
      readTime: '6 min read',
      date: '2024-01-08',
      featured: true,
      downloadPdf: true,
    },
    {
      title: 'GDPR-ready AI in healthcare',
      description:
        'Learn how to implement AI solutions in healthcare that meet strict privacy regulations while delivering clinical value and maintaining patient trust.',
      category: 'Healthcare',
      readTime: '10 min read',
      date: '2024-01-03',
      featured: true,
      downloadPdf: true,
    },
  ];

  handleDownloadPdf(title: string) {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleReadMore(title: string) {
    console.log(`Reading more about: ${title}`);
  }
}
