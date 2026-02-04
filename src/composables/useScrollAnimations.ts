import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  onMounted(() => {
    // Refresh ScrollTrigger after DOM is ready
    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    // Kill all ScrollTriggers on unmount to prevent memory leaks
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  const fadeInUp = (selector: string, options: gsap.TweenVars = {}) => {
    gsap.from(selector, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      ...options
    })
  }

  const fadeIn = (selector: string, options: gsap.TweenVars = {}) => {
    gsap.from(selector, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      ...options
    })
  }

  const staggerFadeInUp = (selector: string, stagger = 0.1, options: gsap.TweenVars = {}) => {
    gsap.from(selector, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      ...options
    })
  }

  const scaleIn = (selector: string, options: gsap.TweenVars = {}) => {
    gsap.from(selector, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      ...options
    })
  }

  return {
    fadeInUp,
    fadeIn,
    staggerFadeInUp,
    scaleIn,
    gsap,
    ScrollTrigger
  }
}
