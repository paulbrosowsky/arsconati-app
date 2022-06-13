<script setup>
import { computed } from 'vue'
import { useGuideStore } from '@/stores/guideStore'
import { useRoute } from 'vue-router'
import PageLayout from '@/components/PageLayout.vue'
import ExhibitCard from '@/components/ExhibitCard.vue'
import ContentText from '@/components/ContentText.vue'

const store = useGuideStore()
const route = useRoute()

const exhibit = computed(() => {
  return store.exhibits.find(
    (exhibit) => exhibit.id === parseInt(route.params.id)
  )
})

const proposals = computed(() => {
  return store.sectionExhibits.filter((item) => item.id !== exhibit.value.id)
})
</script>
<template>
  <PageLayout :bg-image="exhibit.titleImage">
    <template #searchIndex>
      <div
        class="absolute left-full top-5 z-10 -ml-16 h-10 w-10 rounded-full bg-amber-500 px-3 py-3 text-sm font-bold leading-none text-white shadow-sm"
      >
        {{ exhibit.searchIndex }}
      </div>
    </template>
    <template #title>{{ exhibit.title }}</template>
    <template #subtitle>{{ exhibit.subtitle }}</template>

    <ContentText :content="store.currentSection?.body" />

    <section class="mt-10 bg-gray-100 px-4 py-10" v-if="proposals.length">
      <h2 class="mb-5 text-center font-heading text-2xl font-medium">
        Ähnliche Exponate
      </h2>
      <div class="flex w-full snap-x overflow-x-auto scroll-smooth">
        <ExhibitCard
          class="mx-2 shrink-0 snap-center"
          v-for="exhibit in proposals"
          :exhibit="exhibit"
        ></ExhibitCard>
      </div>
    </section>
  </PageLayout>
</template>
