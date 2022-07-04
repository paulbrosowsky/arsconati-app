<script setup>
import { computed, nextTick, onBeforeMount, onMounted } from 'vue'
import { useHistoryStore } from '@/stores/historyStore'
import PageLayout from '@/components/PageLayout.vue'
import ExhibitCard from '@/components/ExhibitCard.vue'
import ContentText from '@/components/ContentText.vue'

const store = useHistoryStore()

const section = computed(() => store.currentSection())
</script>
<template>
  <PageLayout :bg-image="store.currentSection?.titleImage">
    <template #title>{{ store.currentSection?.title }}</template>
    <template #subtitle>
      {{ store.currentSection?.subtitle }}
    </template>

    <!-- <template #nav>
      <div class="flex items-baseline">
        <button
          class="mx-1 rounded-full bg-amber-500 p-2.5 text-white shadow-md focus:bg-amber-600 focus:outline-none"
        >
          <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
            />
          </svg>
        </button>
      </div>
    </template> -->
    <template
      #content
      v-if="store.currentSection?.contents || store.sectionExhibits.length"
    >
      <section
        v-if="store.currentSection?.contents"
        class="mt-10"
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

      <section
        class="mt-10 bg-gray-100 px-4 py-10"
        v-if="store.sectionExhibits.length"
      >
        <h2 class="mb-5 text-center font-heading text-2xl font-medium">
          Exponate
        </h2>
        <div class="flex w-full snap-x overflow-x-auto scroll-smooth">
          <ExhibitCard
            class="mx-2 shrink-0 snap-center"
            v-for="exhibit in store.sectionExhibits"
            :exhibit="exhibit"
          ></ExhibitCard>
        </div>
      </section>
    </template>
  </PageLayout>
</template>
