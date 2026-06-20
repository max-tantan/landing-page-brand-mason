<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorDot = ref(null)
const cursorRing = ref(null)

const onMouseMove = (e) => {
  if (!cursorDot.value || !cursorRing.value) return
  
  cursorDot.value.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  cursorRing.value.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
}

const onMouseDown = () => {
  if (cursorRing.value) cursorRing.value.classList.add('cursor-ring--active')
}

const onMouseUp = () => {
  if (cursorRing.value) cursorRing.value.classList.remove('cursor-ring--active')
}

// Global hook to attach hover listeners to dynamic elements (since we might have router views etc)
const attachHoverListeners = () => {
  const interactables = document.querySelectorAll('a, button, .hover-target')
  interactables.forEach(el => {
    // Avoid attaching multiple times
    if (el.dataset.cursorAttached) return;
    el.dataset.cursorAttached = 'true';

    el.addEventListener('mouseenter', () => {
      cursorRing.value?.classList.add('cursor-ring--hover')
    })
    el.addEventListener('mouseleave', () => {
      cursorRing.value?.classList.remove('cursor-ring--hover')
    })
  })
}

let observer;

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
  
  attachHoverListeners()

  // Re-attach if DOM changes (e.g. v-if or routing)
  observer = new MutationObserver(() => {
    attachHoverListeners()
  })
  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  if (observer) observer.disconnect()
})
</script>

<template>
  <div ref="cursorDot" class="cursor-dot"></div>
  <div ref="cursorRing" class="cursor-ring"></div>
</template>

<style scoped>
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  will-change: transform;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: var(--forest);
  border-radius: 50%;
}

.cursor-ring {
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--forest);
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease, transform 0.1s ease-out;
}

.cursor-ring--active {
  width: 30px;
  height: 30px;
  background-color: rgba(44, 74, 62, 0.1);
}

.cursor-ring--hover {
  width: 60px;
  height: 60px;
  background-color: rgba(44, 74, 62, 0.05);
  border-color: rgba(44, 74, 62, 0.5);
}

@media (pointer: coarse), (max-width: 768px) {
  .cursor-dot, .cursor-ring {
    display: none !important;
  }
}
</style>
