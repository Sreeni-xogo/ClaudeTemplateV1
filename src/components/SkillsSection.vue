<script setup lang="ts">
// Skills section - will display skills grouped by category
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
        <!-- Skill categories will be populated here -->
        <div class="skill-category">
          <h3 class="skill-category__title">Frontend</h3>
          <div class="skill-category__tags">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">CSS/SCSS</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="skill-category__title">Backend</h3>
          <div class="skill-category__tags">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">REST APIs</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="skill-category__title">Tools</h3>
          <div class="skill-category__tags">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">VS Code</span>
            <span class="skill-tag">Figma</span>
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  max-width: 1000px;
  margin: 0 auto;
}

.skill-category {
  text-align: center;
}

.skill-category__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary);
}

.skill-category__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

.skill-tag {
  background: var(--color-bg);
  color: var(--color-text-secondary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  border: 1px solid transparent;
  transition: all var(--transition-fast);
}

.skill-tag:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}
</style>
