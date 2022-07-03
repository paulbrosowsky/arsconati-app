<script setup>
import { ref, computed } from 'vue'
import { useDraggable } from '@vueuse/core'

const draggable = ref(null)
const screen = ref(null)
const angle = ref(0)

const center = computed(() => {
  return {
    x: screen.value.offsetWidth / 2,
    y: screen.value.offsetHeight / 2,
  }
})

const { x, y, style } = useDraggable(draggable, {
  onStart: (position, event) => {
    console.log(getAngle(event))
  },
  onMove: (position, event) => {
    getAngle(event)
  },
})

function getAngle(event) {
  console.log(center.value.y - event.y, center.value.x - event.x)
  const startAngle = angle.value
  const endAngle = Math.atan2(
    center.value.y - event.y,
    center.value.x - event.x
  )
  setTimeout(() => {
    angle.value = endAngle - startAngle
  }, 300)
}
</script>
<template>
  <section
    ref="screen"
    class="flex h-screen w-screen flex-col items-center justify-center px-10"
  >
    <div
      ref="draggable"
      class="fixed h-[20px] w-[20px] rounded-full bg-red-500"
      :style="`transform: rotate(${angle}rad) translateY(-100px);`"
    ></div>
  </section>
</template>
