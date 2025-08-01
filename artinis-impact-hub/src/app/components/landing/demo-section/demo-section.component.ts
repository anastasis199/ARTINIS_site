import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-section',
  imports: [FormsModule, NgIf],
  templateUrl: './demo-section.component.html',
  styleUrl: './demo-section.component.scss'
})
export class DemoSectionComponent  {
  isSubmitted = false;

  formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    useCase: '',
    message: ''
  };

  handleInputChange(field: string, value: string) {
    this.formData[field as keyof typeof this.formData] = value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    // Basic validation
    if (!this.formData.name || !this.formData.email || !this.formData.company || !this.formData.industry) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Demo request submitted:', this.formData);
    this.isSubmitted = true;
    alert("Demo request submitted successfully! We'll contact you within 24 hours.");
  }

  resetForm() {
    this.isSubmitted = false;
    this.formData = {
      name: '',
      email: '',
      company: '',
      phone: '',
      industry: '',
      useCase: '',
      message: ''
    };
  }
}
