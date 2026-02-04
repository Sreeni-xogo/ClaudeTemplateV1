<script setup lang="ts">
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__content">
      <h1 class="hero__title">
        Hi, I'm <span class="text-gradient">Sreeni</span>
      </h1>
      <p class="hero__subtitle">
        Full Stack Developer
      </p>
      <p class="hero__description">
        Building interactive web experiences with modern technologies.
      </p>
      <div class="hero__cta">
        <a
          href="#projects"
          class="btn btn--primary"
          @click.prevent="scrollToSection('#projects')"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="btn btn--outline"
          @click.prevent="scrollToSection('#contact')"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 var(--space-6);
}

.hero__title {
  font-size: var(--text-6xl);
  margin-bottom: var(--space-4);
}

.hero__subtitle {
  font-size: var(--text-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.hero__cta {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  text-decoration: none;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.btn--primary {
  background: var(--gradient-primary);
  color: var(--color-text);
  border: none;
}

.btn--primary:hover {
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-primary);
}

.btn--outline:hover {
  background: var(--color-primary);
  color: var(--color-text);
}

@media (max-width: 768px) {
  .hero__content {
    padding: 0 var(--space-4);
  }

  .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__subtitle {
    font-size: var(--text-xl);
  }

  .hero__description {
    font-size: var(--text-base);
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: calc(100vh - 60px);
    padding-top: 60px;
  }

  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero__subtitle {
    font-size: var(--text-lg);
  }

  .hero__cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
}
</style>
