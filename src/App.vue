<script setup>
import { RouterView } from 'vue-router'
import MainNav from '@/components/MainNav.vue'
</script>

<template>
  <main class="flex flex-col">
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </main>

  <MainNav class="fixed bottom-0"></MainNav>
</template>
