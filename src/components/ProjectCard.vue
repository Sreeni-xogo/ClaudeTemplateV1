<script setup lang="ts">
export interface Project {
  title: string
  description: string
  image?: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__image">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
      />
      <div v-else class="project-card__placeholder">
        <span>{{ project.title.charAt(0) }}</span>
      </div>
    </div>

    <div class="project-card__content">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__description">{{ project.description }}</p>

      <div class="project-card__tech">
        <span
          v-for="tech in project.techStack"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>

      <div class="project-card__links">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link project-link--primary"
        >
          <span class="project-link__icon">↗</span>
          Live Demo
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link project-link--secondary"
        >
          <span class="project-link__icon">◆</span>
          GitHub
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  border: 1px solid transparent;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-glow);
  border-color: rgba(99, 102, 241, 0.3);
}

.project-card__image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.project-card:hover .project-card__image img {
  transform: scale(1.05);
}

.project-card__placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card__placeholder span {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  color: rgba(255, 255, 255, 0.3);
}

.project-card__content {
  padding: var(--space-6);
}

.project-card__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-2);
  color: var(--color-text);
}

.project-card__description {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.tech-tag {
  background: var(--color-bg);
  color: var(--color-primary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}

.project-card__links {
  display: flex;
  gap: var(--space-3);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.project-link--primary {
  background: var(--gradient-primary);
  color: var(--color-text);
}

.project-link--primary:hover {
  box-shadow: var(--shadow-glow);
}

.project-link--secondary {
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-text-secondary);
}

.project-link--secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.project-link__icon {
  font-size: var(--text-base);
}

@media (max-width: 480px) {
  .project-card__image {
    height: 160px;
  }

  .project-card__content {
    padding: var(--space-4);
  }

  .project-card__title {
    font-size: var(--text-lg);
  }

  .project-card__links {
    flex-direction: column;
  }

  .project-link {
    justify-content: center;
  }
}
</style>
