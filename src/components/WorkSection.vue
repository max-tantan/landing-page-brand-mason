<script setup>
import work1 from '../assets/images/work-1.webp'
import work2 from '../assets/images/work-2.webp'
import work3 from '../assets/images/work-3.jpg'
import { useReveal } from '../composables/useReveal'

const projects = [
  {
    id: '01',
    name: 'Spring Summer 2025',
    category: 'Ready-to-Wear',
    description: 'Koleksi yang merayakan kebebasan siluet dengan material alami dan palet warna tanah.',
    src: work1
  },
  {
    id: '02',
    name: 'Luxury Streetwear',
    category: 'Capsule Collection',
    description: 'Perpaduan antara tailoring klasik dengan energi jalanan, menciptakan bahasa visual baru.',
    src: work2
  },
  {
    id: '03',
    name: 'Evening Silhouettes',
    category: 'Haute Couture',
    description: 'Eksplorasi draping dan struktur yang menangkap cahaya dalam setiap lipatan kain.',
    src: work3
  }
]

const projectRefs = projects.map((_, i) =>
  useReveal({ direction: 'up', distance: 30, delay: i * 150, duration: 700, blur: true })
)

function setProjectRef(el, index) {
  projectRefs[index].value = el
}
</script>

<template>
  <section id="work" class="work">
    <div class="container">
      <h2 class="work__title">Koleksi Terpilih</h2>
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :ref="el => setProjectRef(el, index)"
        class="work__project"
        :class="{ 'work__project--reverse': index % 2 === 1 }"
      >
        <div class="work__image-wrap">
          <div class="work__image">
            <img :src="project.src" :alt="project.name" class="work__img" />
          </div>
        </div>
        <div class="work__info">
          <span class="work__number">{{ project.id }}</span>
          <h3 class="work__name">{{ project.name }}</h3>
          <span class="work__category">{{ project.category }}</span>
          <p class="work__desc">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding: 120px 0;
  scroll-margin-top: 80px;
}

.work__title {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 64px;
}

.work__project {
  display: grid;
  grid-template-columns: 6fr 5fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.work__project:last-child {
  margin-bottom: 0;
}

.work__project--reverse {
  direction: rtl;
}

.work__project--reverse .work__info {
  direction: ltr;
}

.work__project--reverse .work__image-wrap {
  direction: ltr;
}

.work__image-wrap {
  overflow: hidden;
}

.work__image {
  transition: transform 0.4s ease;
}

.work__project:hover .work__image {
  transform: scale(1.02);
}

.work__img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  border-radius: 2px;
}

.work__info {
  max-width: 400px;
}

.work__number {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--sand);
  display: block;
  margin-bottom: 12px;
}

.work__name {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 8px;
  line-height: 1.2;
}

.work__category {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--sand);
  display: block;
  margin-bottom: 16px;
}

.work__desc {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--ink);
  opacity: 0.7;
  margin: 0;
}

@media (max-width: 768px) {
  .work {
    padding: 80px 0;
  }

  .work__title {
    margin-bottom: 48px;
    font-size: 28px;
  }

  .work__project {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 64px;
  }

  .work__project--reverse {
    direction: ltr;
  }

  .work__info {
    max-width: 100%;
  }

  .work__name {
    font-size: 28px;
  }
}
</style>
