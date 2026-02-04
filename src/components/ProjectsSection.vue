<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard, { type Project } from './ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

// Placeholder projects - update with real data later
const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product catalog, shopping cart, secure checkout, and order management. Built with modern web technologies for optimal performance.',
    techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task manager with real-time updates, team workspaces, and progress tracking. Features drag-and-drop interface and notification system.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
]

onMounted(() => {
  // Animate section title
  gsap.from('.projects .section__title', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })

  // Animate subtitle
  gsap.from('.projects .section__subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })

  // Animate project cards with stagger
  gsap.from('.project-card', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects__grid',
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })
})
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section__title">
        <span class="text-gradient">Projects</span>
      </h2>
      <p class="section__subtitle">
        Some of my recent work
      </p>

      <div class="projects__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: var(--space-24) 0;
}

.section__title {
  text-align: center;
  margin-bottom: var(--space-4);
}

.section__subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-12);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .projects {
    padding: var(--space-16) 0;
  }

  .section__subtitle {
    margin-bottom: var(--space-8);
  }

  .projects__grid {
    gap: var(--space-6);
  }
}

@media (max-width: 480px) {
  .projects {
    padding: var(--space-12) 0;
  }

  .projects__grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
