<script setup>
import aboutImg from '../assets/images/about.webp'
import { useReveal } from '../composables/useReveal'

const quoteEl = useReveal({ direction: 'up', distance: 30, delay: 100, blur: true, duration: 800 })
const imageEl = useReveal({ direction: 'scale', delay: 300, duration: 800 })
</script>

<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__quote" ref="quoteEl">
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
      <div class="about__image" ref="imageEl">
        <img :src="aboutImg" alt="MAISON ÉLAN Team" class="about__img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--ink);
  padding: 120px 0;
  color: var(--white);
  scroll-margin-top: 80px;
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

.about__img {
  width: 100%;
  max-width: 320px;
  height: 400px;
  object-fit: cover;
  border-radius: 2px;
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

  .about__img {
    max-width: 240px;
    height: 300px;
  }
}
</style>
