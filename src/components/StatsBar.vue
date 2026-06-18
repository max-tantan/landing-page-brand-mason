<script setup>
</script>

<template>
  <section class="stats">
    <hr class="section-divider" />
    <div class="container stats__grid">
      <div class="stats__item">
        <span class="stats__number">15+</span>
        <span class="stats__label">Tahun Berdiri</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">97%</span>
        <span class="stats__label">Kepuasan Klien</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">120+</span>
        <span class="stats__label">Koleksi Rilis</span>
      </div>
    </div>
    <hr class="section-divider" />
  </section>
</template>

<style scoped>
.stats {
  padding: 0;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  padding: 64px 0;
}

.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stats__number {
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 500;
  color: var(--forest);
  line-height: 1;
}

.stats__label {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--sand);
}

@media (max-width: 768px) {
  .stats__grid {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 48px 0;
  }

  .stats__number {
    font-size: 48px;
  }
}
</style>
