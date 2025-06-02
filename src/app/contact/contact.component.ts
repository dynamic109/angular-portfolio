import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          I'd love to hear from you. Send me a message and I'll respond as soon
          as possible.
        </p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p>
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'm always open to new opportunities and
              conversations.
            </p>

            <div class="contact-methods">
              <div class="contact-method" *ngFor="let method of contactMethods">
                <div class="method-icon">{{ method.icon }}</div>
                <div class="method-info">
                  <h3>{{ method.title }}</h3>
                  <p>{{ method.value }}</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Follow Me</h3>
              <div class="social-icons">
                <a
                  href="#"
                  class="social-link"
                  *ngFor="let social of socialLinks"
                >
                  {{ social.icon }}
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-container">
            <form
              class="contact-form"
              (ngSubmit)="onSubmit()"
              #contactForm="ngForm"
            >
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  #name="ngModel"
                  class="form-control"
                  [class.error]="name.invalid && name.touched"
                />
                <div class="error-message" *ngIf="name.invalid && name.touched">
                  Name is required
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  #email="ngModel"
                  class="form-control"
                  [class.error]="email.invalid && email.touched"
                />
                <div
                  class="error-message"
                  *ngIf="email.invalid && email.touched"
                >
                  <span *ngIf="email.errors?.['required']"
                    >Email is required</span
                  >
                  <span *ngIf="email.errors?.['email']"
                    >Please enter a valid email</span
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  #subject="ngModel"
                  class="form-control"
                  [class.error]="subject.invalid && subject.touched"
                />
                <div
                  class="error-message"
                  *ngIf="subject.invalid && subject.touched"
                >
                  Subject is required
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  [(ngModel)]="formData.message"
                  required
                  #message="ngModel"
                  class="form-control"
                  [class.error]="message.invalid && message.touched"
                ></textarea>
                <div
                  class="error-message"
                  *ngIf="message.invalid && message.touched"
                >
                  Message is required
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <div class="success-message" *ngIf="showSuccess">
              <div class="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for your message. I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  showSuccess = false;

  contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'adekanbiemmanuel2019@gmail.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+234 708 773 9038',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lagos, Nigeria',
    },
  ];

  socialLinks = [
    { icon: '💼', name: 'LinkedIn' },
    { icon: '🐙', name: 'GitHub' },
    { icon: '🐦', name: 'Twitter' },
    { icon: '📷', name: 'Instagram' },
  ];

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccess = true;
      this.resetForm();

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);
    }, 2000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
