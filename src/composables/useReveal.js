import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

export function useReveal(options = {}) {
  const el = ref(null)
  let observer = null

  const {
    direction = 'up',
    distance = 40,
    delay = 0,
    duration = 800,
    blur = false,
    easing = 'easeOutCubic'
  } = options

  const translate = {}
  if (direction === 'up') translate.translateY = [distance, 0]
  else if (direction === 'down') translate.translateY = [-distance, 0]
  else if (direction === 'left') translate.translateX = [-distance, 0]
  else if (direction === 'right') translate.translateX = [distance, 0]
  else if (direction === 'scale') {
    translate.scale = [0.95, 1]
  }

  const run = () => {
    if (!el.value) return

    const targets = el.value.nodeType === 1 ? el.value : el.value.$el

    const params = {
      ...translate,
      opacity: [0, 1],
      duration,
      delay,
      easing,
    }

    if (blur) {
      params.filter = ['blur(4px)', 'blur(0)']
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
