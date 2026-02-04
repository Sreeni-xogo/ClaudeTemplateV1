<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="app">
    <TheNavbar />
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

main {
  width: 100%;
}
</style>
