<script setup>
</script>

<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
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
      <div class="hero__image">
        <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero__svg">
          <rect width="500" height="600" rx="4" fill="var(--sand, #C8B89A)" opacity="0.15"/>
          <ellipse cx="250" cy="250" rx="120" ry="160" fill="var(--ink, #1A1A1A)" opacity="0.08"/>
          <path d="M250 80 L310 200 L250 180 L190 200 Z" fill="var(--forest, #2C4A3E)" opacity="0.3"/>
          <path d="M180 350 Q250 280 320 350 Q250 400 180 350Z" fill="var(--ink, #1A1A1A)" opacity="0.06"/>
          <line x1="160" y1="420" x2="340" y2="420" stroke="var(--sand, #C8B89A)" stroke-width="1" opacity="0.5"/>
          <line x1="170" y1="440" x2="330" y2="440" stroke="var(--sand, #C8B89A)" stroke-width="1" opacity="0.3"/>
          <line x1="180" y1="460" x2="320" y2="460" stroke="var(--sand, #C8B89A)" stroke-width="1" opacity="0.2"/>
          <circle cx="250" cy="350" r="60" fill="none" stroke="var(--forest, #2C4A3E)" stroke-width="1" opacity="0.2"/>
          <path d="M200 140 Q250 100 300 140" stroke="var(--forest, #2C4A3E)" stroke-width="1.5" fill="none" opacity="0.4"/>
        </svg>
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

.hero__svg {
  width: 100%;
  max-width: 420px;
  transform: rotate(-2deg);
  height: auto;
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

  .hero__svg {
    max-width: 300px;
  }
}
</style>
