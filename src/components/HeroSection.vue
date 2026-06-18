<script setup>
import heroImg from '../assets/images/hero.webp'
import { useReveal } from '../composables/useReveal'

const contentEl = useReveal({ direction: 'up', distance: 30, delay: 200, blur: true, duration: 900 })
const imageEl = useReveal({ direction: 'right', distance: 40, delay: 400, blur: true, duration: 900 })
</script>

<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content" ref="contentEl">
        <h1 class="hero__headline">
          <span class="hero__headline--italic">Crafting fashion</span>
          <span class="hero__headline--bold">that endures.</span>
        </h1>
        <p class="hero__sub">
          Identitas visual untuk rumah mode yang ingin bertahan lama,
          bukan sekadar terlihat bagus musim ini.
        </p>
        <a href="#work" class="btn-outlined">Lihat Koleksi</a>
      </div>
      <div class="hero__image" ref="imageEl">
        <img :src="heroImg" alt="MAISON ÉLAN Fashion" class="hero__img" />
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

.hero__headline {
  margin: 0 0 24px;
  font-size: 0;
  line-height: 1.1;
}

.hero__headline--italic {
  display: block;
  font-family: var(--font-display);
  font-size: 96px;
  font-weight: 300;
  font-style: italic;
  color: var(--ink);
  line-height: 1.05;
}

.hero__headline--bold {
  display: block;
  font-family: var(--font-body);
  font-size: 96px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.05;
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

.hero__img {
  width: 100%;
  max-width: 420px;
  height: 560px;
  object-fit: cover;
  transform: rotate(-2deg);
  border-radius: 2px;
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
  cursor: pointer;
}

.btn-outlined:hover {
  background: var(--forest);
  color: var(--white);
  border-color: var(--forest);
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
    min-height: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero__content {
    max-width: 100%;
  }

  .hero__headline--italic {
    font-size: 56px;
  }

  .hero__headline--bold {
    font-size: 56px;
  }

  .hero__sub {
    font-size: 16px;
  }

  .hero__image {
    order: -1;
  }

  .hero__img {
    max-width: 300px;
    height: 400px;
  }
}
</style>
