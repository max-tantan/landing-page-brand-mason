<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <a href="#" class="nav__logo">maison élan</a>
      <div class="nav__links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: background 0.3s, backdrop-filter 0.3s, padding 0.3s;
  background: transparent;
}

.nav--scrolled {
  background: rgba(240, 237, 232, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 12px 0;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.nav__links {
  display: flex;
  gap: 40px;
}

.nav__links a {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: color 0.2s;
}

.nav__links a:hover {
  color: var(--forest);
}
</style>
