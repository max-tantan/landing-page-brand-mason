<script setup>
const projects = [
  {
    id: '01',
    name: 'Spring Summer 2025',
    category: 'Ready-to-Wear',
    description: 'Koleksi yang merayakan kebebasan siluet dengan material alami dan palet warna tanah.',
    image: 'ss25'
  },
  {
    id: '02',
    name: 'Luxury Streetwear',
    category: 'Capsule Collection',
    description: 'Perpaduan antara tailoring klasik dengan energi jalanan, menciptakan bahasa visual baru.',
    image: 'street'
  },
  {
    id: '03',
    name: 'Evening Silhouettes',
    category: 'Haute Couture',
    description: 'Eksplorasi draping dan struktur yang menangkap cahaya dalam setiap lipatan kain.',
    image: 'evening'
  }
]
</script>

<template>
  <section id="work" class="work">
    <div class="container">
      <h2 class="work__title">Koleksi Terpilih</h2>
      <div v-for="(project, index) in projects" :key="project.id" class="work__project" :class="{ 'work__project--reverse': index % 2 === 1 }">
        <div class="work__image-wrap">
          <div class="work__image">
            <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="work__svg">
              <rect width="600" height="500" rx="2" fill="var(--ink, #1A1A1A)" opacity="0.03"/>
              <rect x="40" y="40" width="520" height="420" rx="2" stroke="var(--sand, #C8B89A)" stroke-width="0.5" opacity="0.5"/>
              <template v-if="project.image === 'ss25'">
                <ellipse cx="300" cy="250" rx="100" ry="140" fill="var(--forest, #2C4A3E)" opacity="0.12"/>
                <path d="M200 320 Q300 200 400 320" stroke="var(--forest, #2C4A3E)" stroke-width="2" fill="none" opacity="0.5"/>
                <path d="M220 340 Q300 240 380 340" stroke="var(--sand, #C8B89A)" stroke-width="1.5" fill="none" opacity="0.4"/>
                <circle cx="300" cy="200" r="50" fill="none" stroke="var(--ink, #1A1A1A)" stroke-width="1" opacity="0.15"/>
                <line x1="100" y1="420" x2="500" y2="420" stroke="var(--sand, #C8B89A)" stroke-width="0.5" opacity="0.3"/>
              </template>
              <template v-else-if="project.image === 'street'">
                <rect x="150" y="100" width="120" height="280" rx="4" fill="var(--ink, #1A1A1A)" opacity="0.06"/>
                <rect x="330" y="120" width="100" height="260" rx="4" fill="var(--forest, #2C4A3E)" opacity="0.1"/>
                <rect x="160" y="130" width="100" height="30" rx="2" stroke="var(--forest, #2C4A3E)" stroke-width="1" opacity="0.3"/>
                <rect x="340" y="150" width="80" height="20" rx="2" stroke="var(--forest, #2C4A3E)" stroke-width="1" opacity="0.3"/>
                <circle cx="210" cy="100" r="30" fill="none" stroke="var(--sand, #C8B89A)" stroke-width="1.5" opacity="0.5"/>
              </template>
              <template v-else>
                <ellipse cx="300" cy="220" rx="80" ry="140" fill="var(--ink, #1A1A1A)" opacity="0.05"/>
                <path d="M180 420 Q240 300 300 380 Q360 300 420 420" stroke="var(--forest, #2C4A3E)" stroke-width="1.5" fill="none" opacity="0.4"/>
                <circle cx="300" cy="160" r="40" fill="var(--ink, #1A1A1A)" opacity="0.04"/>
                <line x1="200" y1="440" x2="400" y2="440" stroke="var(--sand, #C8B89A)" stroke-width="0.5" opacity="0.3"/>
              </template>
            </svg>
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

.work__svg {
  width: 100%;
  height: auto;
  display: block;
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
