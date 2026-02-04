<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ParticleScene from './components/ParticleScene.vue'
</script>

<template>
  <div class="app">
    <!-- Global particle background -->
    <div class="particles-bg">
      <ParticleScene />
    </div>

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
  position: relative;
}

.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

main {
  position: relative;
  z-index: 1;
  width: 100%;
}
</style>
