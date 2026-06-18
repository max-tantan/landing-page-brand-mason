<script setup>
</script>

<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__quote">
        <span class="about__mark">"</span>
        <blockquote class="about__text">
          We don't decorate.<br />
          <strong>We build.</strong>
        </blockquote>
        <p class="about__desc">
          Kami adalah rumah mode kecil yang percaya bahwa fashion
          bukan soal tren &mdash; tapi soal karakter yang abadi.
        </p>
      </div>
      <div class="about__image">
        <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="about__svg">
          <rect width="400" height="500" rx="2" fill="var(--white, #FFFFFF)" opacity="0.05"/>
          <ellipse cx="200" cy="200" rx="70" ry="90" fill="var(--white, #FFFFFF)" opacity="0.08"/>
          <path d="M120 420 Q200 300 280 420" stroke="var(--white, #FFFFFF)" stroke-width="1" fill="none" opacity="0.2"/>
          <line x1="150" y1="430" x2="250" y2="430" stroke="var(--white, #FFFFFF)" stroke-width="0.5" opacity="0.15"/>
          <circle cx="200" cy="150" r="55" fill="none" stroke="var(--white, #FFFFFF)" stroke-width="1" opacity="0.15"/>
          <path d="M160 370 Q200 330 240 370" stroke="var(--white, #FFFFFF)" stroke-width="0.8" fill="none" opacity="0.2"/>
          <line x1="100" y1="480" x2="300" y2="480" stroke="var(--white, #FFFFFF)" stroke-width="0.5" opacity="0.1"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--ink);
  padding: 120px 0;
  color: var(--white);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about__quote {
  position: relative;
  padding-left: 40px;
}

.about__mark {
  position: absolute;
  top: -20px;
  left: 0;
  font-family: var(--font-display);
  font-size: 96px;
  line-height: 1;
  color: var(--sand);
  opacity: 0.4;
  font-style: italic;
}

.about__text {
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.2;
  color: var(--white);
  margin: 0 0 24px;
}

.about__text strong {
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 700;
  display: block;
}

.about__desc {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--white);
  opacity: 0.7;
  margin: 0;
  max-width: 380px;
}

.about__image {
  display: flex;
  justify-content: center;
}

.about__svg {
  width: 100%;
  max-width: 320px;
  height: auto;
}

@media (max-width: 768px) {
  .about {
    padding: 80px 0;
  }

  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about__quote {
    padding-left: 0;
  }

  .about__mark {
    position: static;
    font-size: 64px;
    display: block;
    margin-bottom: -16px;
  }

  .about__text {
    font-size: 32px;
  }

  .about__image {
    order: -1;
  }

  .about__svg {
    max-width: 240px;
  }
}
</style>
