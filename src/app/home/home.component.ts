import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Hi, I'm <span class="gradient-text">Emmanuel Adekanbi</span>
        </h1>
        <p class="hero-subtitle">Frontend, Backend & Mobile App Developer</p>
        <p class="hero-description">
          I create beautiful, functional, and user-centered digital experiences.
          Passionate about clean code and innovative solutions.
        </p>
        <div class="hero-buttons">
          <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
          <a routerLink="/about" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="150" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea" />
                <stop offset="100%" style="stop-color:#764ba2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-card" *ngFor="let skill of skills">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span
                  class="tech-tag"
                  *ngFor="let tech of project.technologies"
                  >{{ tech }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  skills = [
    {
      icon: '💻',
      name: 'Frontend Development',
      description: 'React, Angular, TypeScript',
    },
    {
      icon: '⚙️',
      name: 'Backend Development',
      description: 'Node.js, Express, MongoDB',
    },
    {
      icon: '🎨',
      name: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
    },
    {
      icon: '☁️',
      name: 'Mobile Development',
      description: 'React Native, Ionic, Git',
    },
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with modern design and seamless user experience.',
      image: '/e-commerce-img.jpg',
      technologies: ['Nextjs', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates and team features.',
      image: '/task-management-img.jpg',
      technologies: ['React', 'Firebase', 'TypeScript'],
    },
    {
      title: 'Portfolio Website',
      description:
        'Responsive portfolio website showcasing creative design and smooth animations.',
      image: '/portfolio-img.jpg',
      technologies: ['Angular', 'CSS', 'Netlify'],
    },
  ];
}
