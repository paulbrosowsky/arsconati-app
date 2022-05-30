<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  section: {
    type: Object,
    require: true,
  },
})

function openSection() {
  router.push({ name: 'section', params: { id: 1 } })
}
</script>
<template>
  <div
    class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-2xl shadow-md"
    @click="openSection"
  >
    <img class="object-cover" :src="section.image" alt="" />
    <div
      class="absolute top-0 bottom-0 right-0 left-0 z-10 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 py-4 px-8 text-center text-white"
    >
      <h3 class="font-heading text-2xl font-semibold">{{ section.title }}</h3>
      <h4 class="mb-2 after:font-heading">{{ section.subtitle }}</h4>
      <p class="text-sm">{{ section.description }}</p>
    </div>
  </div>
</template>
