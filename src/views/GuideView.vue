<script setup>
import { onBeforeUnmount, onMounted, computed } from 'vue'
import PageLayout from '@/components/PageLayout.vue'
import ExhibitCard from '@/components/ExhibitCard.vue'
import { useGuideStore } from '@/stores/guideStore'

const store = useGuideStore()

const section = computed(() => store.currentSection())

const exhibits = [
  {
    image: '/images/tutankhamun.jpeg',
    searchIndex: '22',
    title: 'Tutankhamun Maske',
  },
  {
    image: '/images/lanzelot.jpeg',
    searchIndex: '14',
    title: 'Turnierrüstung',
  },
  {
    image: '/images/samurai.jpeg',
    searchIndex: '03',
    title: 'Samurai-Rüstungen',
  },
  {
    image: '/images/napoleon.jpeg',
    searchIndex: '08',
    title: 'Napoleon Bonaparte',
  },
  {
    image: '/images/gusaren.jpeg',
    searchIndex: '23',
    title: 'Gusaren-Uniform',
  },
]
</script>
<template>
  <PageLayout bg-image="/images/mittelalter.jpeg">
    <template #title>{{ store.currentSection.title }}</template>
    <template #subtitle>
      {{ store.currentSection.subtitle }}
    </template>

    <template #nav>
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
    </template>

    <section class="mb-16 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl font-medium">
        Frühmittelalter
      </h2>
      <h4 class="mb-5 text-center font-heading">
        Mitte 6. Jahrhundert bis ca. 1050
      </h4>
      <p class="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
        accusantium saepe quas distinctio ad, iure ut adipisci mollitia corrupti
        soluta sapiente cupiditate!
      </p>

      <h2 class="my-5 text-center font-heading text-xl">Exponate</h2>
      <div class="flex w-full snap-x overflow-x-auto scroll-smooth">
        <ExhibitCard
          class="mx-2 shrink-0 snap-center"
          v-for="exhibit in exhibits"
          :exhibit="exhibit"
        ></ExhibitCard>
      </div>
    </section>

    <section class="mb-16 bg-neutral-100 py-10 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl">Spätmittelalter</h2>
      <h4 class="mb-5 text-center font-heading">
        13. bis Anfang 16. Jahrhundert
      </h4>
      <p class="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
        accusantium saepe quas distinctio ad, iure ut adipisci mollitia corrupti
        soluta sapiente cupiditate!
      </p>

      <h2 class="my-5 text-center font-heading text-xl">Exponate</h2>
      <div class="flex w-full snap-x overflow-x-auto scroll-smooth">
        <ExhibitCard
          class="mx-2 shrink-0 snap-center"
          v-for="exhibit in exhibits"
          :exhibit="exhibit"
        ></ExhibitCard>
      </div>
    </section>
  </PageLayout>
</template>
