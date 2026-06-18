<script setup>
import { useReveal } from '../composables/useReveal'

const ctaEl = useReveal({ direction: 'scale', delay: 150, duration: 800, blur: true })
</script>

<template>
  <section id="contact" class="cta">
    <div class="container cta__inner" ref="ctaEl">
      <h2 class="cta__headline">Ready to start?</h2>
      <a href="mailto:hello@maisonelan.com" class="btn-cta">Get in touch &rarr;</a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--forest);
  padding: 120px 0;
  color: var(--white);
  scroll-margin-top: 80px;
}

.cta__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
}

.cta__headline {
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 400;
  font-style: italic;
  color: var(--white);
  margin: 0;
  line-height: 1.1;
}

.btn-cta {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--white);
  padding: 14px 36px;
  border: 1.5px solid var(--white);
  background: transparent;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
}

.btn-cta:hover {
  background: var(--white);
  color: var(--forest);
}

@media (max-width: 768px) {
  .cta {
    padding: 80px 0;
  }

  .cta__headline {
    font-size: 42px;
  }
}
</style>
