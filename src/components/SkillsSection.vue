<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

// Placeholder skills - update with your actual skills
const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '◈',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'GSAP', 'Three.js']
  },
  {
    title: 'Backend',
    icon: '◉',
    skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Tools & DevOps',
    icon: '◎',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'VS Code', 'Figma', 'Linux', 'Netlify']
  }
]

onMounted(() => {
  // Animate section title
  gsap.from('.skills .section__title', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })

  // Animate subtitle
  gsap.from('.skills .section__subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })

  // Animate skill categories with stagger
  gsap.from('.skill-category', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.skills__categories',
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })

  // Animate skill tags with stagger
  gsap.from('.skill-tag', {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.03,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.skills__categories',
      start: 'top 75%',
      end: 'top 20%',
      toggleActions: 'play reverse play reverse'
    }
  })
})
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section__title">
        <span class="text-gradient">Skills</span>
      </h2>
      <p class="section__subtitle">
        Technologies I work with
      </p>

      <div class="skills__categories">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="skill-category"
        >
          <div class="skill-category__header">
            <span class="skill-category__icon">{{ category.icon }}</span>
            <h3 class="skill-category__title">{{ category.title }}</h3>
          </div>
          <div class="skill-category__tags">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: var(--space-24) 0;
  background: var(--color-surface);
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

.skills__categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  max-width: 1100px;
  margin: 0 auto;
}

.skill-category {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid transparent;
  transition: all var(--transition-base);
}

.skill-category:hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: var(--shadow-glow);
}

.skill-category__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.skill-category__icon {
  font-size: var(--text-2xl);
  color: var(--color-primary);
}

.skill-category__title {
  font-size: var(--text-xl);
  color: var(--color-text);
  font-weight: var(--font-semibold);
}

.skill-category__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skill-tag {
  background: var(--color-surface);
  color: var(--color-text-secondary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  border: 1px solid transparent;
  transition: all var(--transition-fast);
  cursor: default;
}

.skill-tag:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .skills {
    padding: var(--space-16) 0;
  }

  .section__subtitle {
    margin-bottom: var(--space-8);
  }

  .skills__categories {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 480px) {
  .skills {
    padding: var(--space-12) 0;
  }

  .skill-category {
    padding: var(--space-4);
  }

  .skill-category__title {
    font-size: var(--text-lg);
  }

  .skill-tag {
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
  }
}
</style>
