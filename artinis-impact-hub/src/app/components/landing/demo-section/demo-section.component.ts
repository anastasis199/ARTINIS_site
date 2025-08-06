import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) {}

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
    const url = "https://formcarry.com/s/XscwxojVzLA";
    const body = {
      name: this.formData.name,
      email: this.formData.email,
      company: this.formData.company,
      phone: this.formData.phone,
      industry: this.formData.industry,
      useCase: this.formData.useCase,
      message: this.formData.message
    };

    this.http.post(url, body).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.resetForm();
        this.isSubmitted = true;
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again later.');
      }
    });
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
