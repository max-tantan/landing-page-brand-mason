import { ref, onMounted, onUnmounted } from 'vue'
import { animate, stagger } from 'animejs'

export function useReveal(options = {}) {
  const el = ref(null)
  let observer = null

  const {
    direction = 'up',
    distance = 40,
    delay = 0,
    duration = 800,
    blur = false,
    easing = 'easeOutCubic',
    staggerDelay = 0,
    type = 'fade', // fade, clip
  } = options

  const run = () => {
    if (!el.value) return

    const baseEl = el.value.nodeType === 1 ? el.value : el.value.$el
    const targets = staggerDelay > 0 ? baseEl.children : baseEl

    const params = {
      duration,
      delay: staggerDelay > 0 ? stagger(staggerDelay, {start: delay}) : delay,
      easing,
    }

    if (type === 'clip') {
      if (direction === 'up') {
        params.clipPath = ['polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)']
      } else if (direction === 'left') {
        params.clipPath = ['polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)']
      } else {
        params.clipPath = ['polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)']
      }
    } else {
      params.opacity = [0, 1]
      if (direction === 'up') params.translateY = [distance, 0]
      else if (direction === 'down') params.translateY = [-distance, 0]
      else if (direction === 'left') params.translateX = [-distance, 0]
      else if (direction === 'right') params.translateX = [distance, 0]
      else if (direction === 'scale') params.scale = [0.95, 1]

      if (blur) {
        params.filter = ['blur(4px)', 'blur(0)']
      }
    }

    animate(targets, params)
  }

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }

    const target = el.value?.nodeType === 1 ? el.value : el.value?.$el
    if (!target) return

    if (target.dataset.revealed === 'true') return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !entry.target.dataset.revealed) {
          entry.target.dataset.revealed = 'true'
          run()
          if (observer) observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(target)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return el
}
