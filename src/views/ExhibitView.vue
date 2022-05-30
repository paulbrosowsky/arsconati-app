<script setup>
import PageLayout from '@/components/PageLayout.vue'

import ExhibitCard from '@/components/ExhibitCard.vue'

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
  <PageLayout bg-image="/images/napoleon.jpeg">
    <template #searchIndex>
      <div
        class="absolute left-full top-5 z-10 -ml-16 h-10 w-10 rounded-full bg-amber-500 p-2.5 text-sm font-bold text-white shadow-sm"
      >
        08
      </div>
    </template>
    <template #title>Napoleon Bonaparte</template>
    <template #subtitle>
      War ein französischer General, revolutionärer Diktator und Kaiser der
      Franzosen.
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
      <p class="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
        accusantium saepe quas distinctio ad, iure ut adipisci mollitia corrupti
        soluta sapiente cupiditate!
      </p>
    </section>

    <section class="mb-16 bg-neutral-100 py-10 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl font-medium">
        Interessante Fakten
      </h2>
      <div class="mb-10">
        <h4 class="mb-5 text-center font-heading">Wie groß war Napoleon?</h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
          accusantium saepe quas distinctio ad, iure ut adipisci mollitia
          corrupti soluta sapiente cupiditate!
        </p>
      </div>

      <div>
        <h4 class="mb-5 text-center font-heading">
          Was hat Mona Lisa mit Napoleon zu tun?
        </h4>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
          accusantium saepe quas distinctio ad, iure ut adipisci mollitia
          corrupti soluta sapiente cupiditate!
        </p>
      </div>
    </section>

    <section class="mb-16 px-4">
      <h2 class="my-5 text-center font-heading text-xl">Ähnliche Exponate</h2>
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
