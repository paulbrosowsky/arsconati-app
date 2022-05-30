<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  exhibit: {
    type: Object,
    required: true,
  },
})

function openExhibit() {
  router.push({ name: 'exhibit', params: { id: 1 } })
}
</script>
<template>
  <div class="w-1/2 overflow-hidden" @click="openExhibit">
    <div
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl shadow-lg"
    >
      <img class="object-cover" :src="exhibit.image" alt="" />
      <div
        class="z-8 absolute left-3/4 top-1.5 h-8 w-8 rounded-full bg-amber-500 px-2 py-2 text-xs font-bold text-white shadow-sm"
      >
        {{ exhibit.searchIndex }}
      </div>
    </div>
    <h4 class="mt-3 text-center font-heading leading-tight">
      {{ exhibit.title }}
    </h4>
  </div>
</template>
