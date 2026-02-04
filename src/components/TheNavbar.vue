<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">
      <a href="#hero" class="navbar__logo" @click.prevent="scrollToSection('#hero')">
        <span class="text-gradient">Portfolio</span>
      </a>

      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--active': isMobileMenuOpen }"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="navbar__links" :class="{ 'navbar__links--open': isMobileMenuOpen }">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="navbar__link"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--space-4) 0;
  transition: background-color var(--transition-base), backdrop-filter var(--transition-base);
}

.navbar--scrolled {
  background-color: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
}

.navbar__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  text-decoration: none;
}

.navbar__links {
  display: flex;
  gap: var(--space-8);
  list-style: none;
}

.navbar__link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: var(--font-medium);
  transition: color var(--transition-fast);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--transition-fast);
}

.navbar__link:hover {
  color: var(--color-text);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.navbar__toggle--active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__toggle--active span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    padding: var(--space-8) 0;
    gap: var(--space-6);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform var(--transition-base), opacity var(--transition-base), visibility var(--transition-base);
  }

  .navbar__links--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
