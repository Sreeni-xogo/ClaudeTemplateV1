<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/' },
  { name: 'Email', icon: 'email', url: 'mailto:hello@example.com' }
]

onMounted(() => {
  // Animate section title
  gsap.from('.contact .section__title', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%'
    }
  })

  // Animate subtitle
  gsap.from('.contact .section__subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%'
    }
  })

  // Animate contact links with stagger
  gsap.from('.contact__link', {
    y: 40,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.contact__links',
      start: 'top 85%'
    }
  })

  // Animate footer
  gsap.from('.footer', {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 95%'
    }
  })
})
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section__title">
        <span class="text-gradient">Get in Touch</span>
      </h2>
      <p class="section__subtitle">
        Let's work together
      </p>

      <div class="contact__links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          class="contact__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact__link-icon">{{ link.icon === 'github' ? '◆' : link.icon === 'linkedin' ? '◇' : '✉' }}</span>
          <span class="contact__link-name">{{ link.name }}</span>
        </a>
      </div>

      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Sreeni. All rights reserved.</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: var(--space-24) 0;
  text-align: center;
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

.contact__links {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
  margin-bottom: var(--space-16);
}

.contact__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-6);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--color-text);
  transition: all var(--transition-fast);
  min-width: 120px;
}

.contact__link:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.contact__link-icon {
  font-size: var(--text-2xl);
  color: var(--color-primary);
}

.contact__link-name {
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
}

.footer {
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-surface);
}

.footer p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}
</style>
