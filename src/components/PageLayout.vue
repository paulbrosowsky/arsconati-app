<script setup>
import { useSlots } from 'vue'

defineProps({
  bgImage: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="aspect-w-1 relative -mb-5 -mt-14 h-screen w-full"
    :class="{ 'mt-0 h-[500px]': !!$slots.content }"
  >
    <slot name="searchIndex"></slot>
    <img class="object-cover" :src="bgImage" alt="" />
    <div class="relative">
      <div
        class="absolute bottom-0 w-full bg-opacity-50 bg-gradient-to-t from-gray-800 to-transparent p-4 pb-14 pt-5 font-heading text-white shadow-white drop-shadow-md"
      >
        <h1 class="mb-2 text-3xl font-semibold">
          <slot name="title"></slot>
        </h1>
        <h4><slot name="subtitle"></slot></h4>
      </div>
    </div>
  </div>

  <div class="relative z-10 rounded-3xl bg-white pt-6 pb-32">
    <nav class="absolute -top-5 right-6" v-if="$slots.nav">
      <slot name="nav"></slot>
    </nav>
    <slot name="content"></slot>
  </div>
</template>
