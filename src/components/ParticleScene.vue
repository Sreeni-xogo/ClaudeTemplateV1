<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points
let animationId: number
let mouseX = 0
let mouseY = 0

const PARTICLE_COUNT = 2000
const PARTICLE_SPREAD = 1000

const initScene = () => {
  if (!canvasRef.value) return

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  )
  camera.position.z = 500

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create particles
  createParticles()

  // Start animation
  animate()
}

const createParticles = () => {
  // Geometry
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const colors = new Float32Array(PARTICLE_COUNT * 3)
  const sizes = new Float32Array(PARTICLE_COUNT)

  // Color palette for space theme
  const colorPalette = [
    new THREE.Color('#6366f1'), // Cosmic Blue
    new THREE.Color('#a855f7'), // Stellar Purple
    new THREE.Color('#ec4899'), // Nebula Pink
    new THREE.Color('#22d3ee'), // Aurora Cyan
    new THREE.Color('#f8fafc')  // Star White
  ]

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3

    // Random positions in a sphere
    const radius = Math.random() * PARTICLE_SPREAD
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos((Math.random() * 2) - 1)

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    // Random color from palette
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    colors[i3] = color.r
    colors[i3 + 1] = color.g
    colors[i3 + 2] = color.b

    // Random sizes
    sizes[i] = Math.random() * 3 + 1
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  // Material
  const material = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  })

  // Points
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  // Rotate particles slowly
  particles.rotation.x += 0.0002
  particles.rotation.y += 0.0003

  // Mouse interaction - smooth follow
  const targetX = mouseX * 0.0005
  const targetY = mouseY * 0.0005

  particles.rotation.x += (targetY - particles.rotation.x) * 0.02
  particles.rotation.y += (targetX - particles.rotation.y) * 0.02

  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!renderer || !camera) return

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const handleMouseMove = (event: MouseEvent) => {
  mouseX = event.clientX - window.innerWidth / 2
  mouseY = event.clientY - window.innerHeight / 2
}

onMounted(() => {
  initScene()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)

  // Cleanup Three.js resources
  if (particles) {
    particles.geometry.dispose()
    ;(particles.material as THREE.PointsMaterial).dispose()
  }
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<style scoped>
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
