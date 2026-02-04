<script setup lang="ts">
// Projects section - will display 2 project cards
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
        <!-- Project cards will be added here -->
        <div class="project-card project-card--placeholder">
          <div class="project-card__image"></div>
          <div class="project-card__content">
            <h3>Project 1</h3>
            <p>Project description coming soon...</p>
          </div>
        </div>

        <div class="project-card project-card--placeholder">
          <div class="project-card__image"></div>
          <div class="project-card__content">
            <h3>Project 2</h3>
            <p>Project description coming soon...</p>
          </div>
        </div>
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

.project-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-glow);
}

.project-card--placeholder .project-card__image {
  height: 200px;
  background: linear-gradient(135deg, var(--color-bg), var(--color-surface));
}

.project-card__content {
  padding: var(--space-6);
}

.project-card__content h3 {
  margin-bottom: var(--space-2);
}

.project-card__content p {
  color: var(--color-text-secondary);
}

@media (max-width: 480px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
