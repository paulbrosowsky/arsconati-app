<script setup>
import { computed } from 'vue'
import { useArtStore } from '@/stores/artStore'
import PageLayout from '@/components/PageLayout.vue'
import ExhibitCard from '@/components/ExhibitCard.vue'
import ContentText from '@/components/ContentText.vue'

const store = useArtStore()

const section = computed(() => store.currentSection())
</script>
<template>
  <PageLayout :bg-image="store.currentSection?.titleImage">
    <template #title>{{ store.currentSection?.title }}</template>
    <template #subtitle>
      {{ store.currentSection?.subtitle }}
    </template>
    <template #content>
      <section
        v-for="(content, index) in store.currentSection?.contents"
        :key="index"
      >
        <div
          v-if="content?.images"
          v-for="(image, index) in content?.images"
          :key="index"
          class="mt-10 p-10 first:mt-0"
        >
          <img class="rounded-xl shadow-lg" :src="image" />
        </div>

        <ContentText class="mb-10" :content="content?.body" />
      </section>
    </template>
  </PageLayout>
</template>
