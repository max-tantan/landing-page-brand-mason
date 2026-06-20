<script setup>
import Cursor from './components/Cursor.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import WorkSection from './components/WorkSection.vue'
import AboutSection from './components/AboutSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <Cursor />
  <NavBar />
  <main>
    <HeroSection />
    <StatsBar />
    <WorkSection />
    <AboutSection />
    <CtaSection />
  </main>
  <FooterSection />
</template>
