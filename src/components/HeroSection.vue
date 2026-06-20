<script setup>
import heroImg from '../assets/images/hero.webp'
import { useReveal } from '../composables/useReveal'

const contentEl = useReveal({ staggerDelay: 200, direction: 'up', distance: 40, delay: 200, blur: true, duration: 1000 })
const imageEl = useReveal({ type: 'clip', direction: 'up', delay: 600, duration: 1400, easing: 'easeOutExpo' })
</script>

<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content" ref="contentEl">
        <h1 class="hero__headline--italic">Crafting fashion</h1>
        <h1 class="hero__headline--bold">that endures.</h1>
        <p class="hero__sub">
          Identitas visual untuk rumah mode yang ingin bertahan lama,
          bukan sekadar terlihat bagus musim ini.
        </p>
        <div>
          <a href="#work" class="btn-outlined hover-target">Lihat Koleksi</a>
        </div>
      </div>
      <div class="hero__image" ref="imageEl">
        <div class="hero__img-wrapper">
          <img :src="heroImg" alt="MAISON ÉLAN Fashion" class="hero__img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
}

.hero__grid {
  display: grid;
  grid-template-columns: 6fr 5fr;
  gap: 60px;
  align-items: center;
  width: 100%;
}

.hero__content {
  max-width: 540px;
}

.hero__headline--italic {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(40px, 10vw, 96px);
  font-weight: 300;
  font-style: italic;
  color: var(--ink);
  line-height: 1.05;
  margin: 0;
}

.hero__headline--bold {
  display: block;
  font-family: var(--font-body);
  font-size: clamp(40px, 10vw, 96px);
  font-weight: 700;
  color: var(--ink);
  line-height: 1.05;
  margin: 0 0 24px 0;
}

.hero__sub {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.6;
  color: var(--ink);
  opacity: 0.7;
  margin: 0 0 40px;
  max-width: 420px;
}

.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__img-wrapper {
  overflow: hidden;
  border-radius: 2px;
  transform: rotate(-2deg);
  animation: float 6s ease-in-out infinite;
}

.hero__img {
  width: 100%;
  max-width: 420px;
  height: 560px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease-out;
}

.hero__img-wrapper:hover .hero__img {
  transform: scale(1.05);
}

@keyframes float {
  0% { transform: rotate(-2deg) translateY(0px); }
  50% { transform: rotate(-2deg) translateY(-15px); }
  100% { transform: rotate(-2deg) translateY(0px); }
}

.btn-outlined {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--ink);
  padding: 14px 36px;
  border: 1.5px solid var(--ink);
  background: transparent;
  transition: background 0.3s, color 0.3s;
  cursor: none; /* using custom cursor */
}

.btn-outlined:hover {
  background: var(--forest);
  color: var(--white);
  border-color: var(--forest);
}

@media (max-width: 768px) {
  .hero {
    padding: 140px 0 60px;
    min-height: auto;
    text-align: center;
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero__content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__sub {
    margin: 0 0 32px;
  }

  .hero__image {
    order: -1;
  }

  .hero__img {
    max-width: 100%;
    height: 360px;
  }
}
</style>
