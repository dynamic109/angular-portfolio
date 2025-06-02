import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-hero">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h1 class="page-title">About Me</h1>
            <p class="lead">
              I'm a passionate full-stack developer with over 2 years of
              experience creating digital solutions that make a difference.
            </p>
            <p>
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              user-centered digital experiences. I specialize in modern
              JavaScript frameworks, responsive design, and building scalable
              web applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community through blog posts and mentoring.
            </p>
          </div>
          <div class="about-image">
            <div class="image-container">
              <img src="/me.jpg" alt="Profile" class="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let item of experience">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>{{ item.position }}</h3>
              <h4>{{ item.company }}</h4>
              <span class="timeline-date">{{ item.period }}</span>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education">
      <div class="container">
        <h2 class="section-title">Education & Certifications</h2>
        <div class="education-grid">
          <div class="education-card" *ngFor="let item of education">
            <div class="education-icon">🎓</div>
            <h3>{{ item.degree }}</h3>
            <h4>{{ item.institution }}</h4>
            <span class="education-year">{{ item.year }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  experience = [
    {
      position: 'Intern Frontend Developer',
      company: 'Yomi Coders.',
      period: '2022 - 2023',
      description:
        'Leading development of enterprise web applications using Angular, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    },
    {
      position: 'Intern Frontend Developer',
      company: 'Intent Technologies.',
      period: '2024 - 2025',
      description:
        'Developed responsive web applications and collaborated with design teams to create engaging user interfaces using React and Vue.js.',
    },
    {
      position: 'Intern Mobile and Frontend Developer',
      company: 'Bincom Dev Center',
      period: '2025 - Till Date',
      description:
        'Building and maintaining company websites, Learning modern development practices, and contributing to various client projects.',
    },
  ];

  education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Lagos State University',
      year: '2023 - Till Date',
    },
    {
      degree: 'Frontend Development Bootcamp',
      institution: 'Bincom Academy',
      year: '2025',
    },
    {
      degree: 'Backend Development Bootcamp',
      institution: 'GDSC LASU',
      year: '2025',
    },
    {
      degree: 'Mobile Development Bootcamp',
      institution: 'Bincom Academy',
      year: '2025',
    },
  ];
}
