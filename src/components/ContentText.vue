<script setup>
defineProps({
  content: { type: String, required: true },
})
</script>
<template>
  <article
    class="prose px-4 prose-headings:text-center prose-headings:font-heading prose-headings:tracking-normal prose-h2:text-2xl prose-h2:font-medium prose-h4:mb-5 prose-h4:text-base prose-h4:font-normal prose-p:text-sm"
    v-html="content"
  />
</template>
