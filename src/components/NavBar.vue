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
      <a href="#" class="nav__logo hover-target">maison élan</a>
      <div class="nav__links">
        <a href="#work" class="hover-target">Work</a>
        <a href="#about" class="hover-target">About</a>
        <a href="#contact" class="hover-target">Contact</a>
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
  padding: 32px 0;
  transition: background 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease, border-bottom 0.4s ease;
  background: transparent;
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  background: rgba(240, 237, 232, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 16px 0;
  border-bottom: 1px solid rgba(26, 26, 26, 0.05);
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
  position: relative;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: color 0.3s ease;
  padding-bottom: 4px;
}

.nav__links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--forest);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav__links a:hover {
  color: var(--forest);
}

.nav__links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 768px) {
  .nav {
    padding: 16px 0;
  }
  .nav--scrolled {
    padding: 12px 0;
  }
  .nav__inner {
    flex-direction: column;
    gap: 16px;
  }
  .nav__links {
    gap: 20px;
  }
  .nav__links a {
    font-size: 10px;
  }
}
</style>
