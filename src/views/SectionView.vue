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
    title: 'Napoleons Zimmer',
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
    <template #title>Mittelalter</template>
    <template #subtitle>
      Europäisches Mittelalter, Ritter Rüstungen, 30-jähriger Krieg
    </template>

    <template #nav>
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

      <button
        class="mx-1 rounded-full bg-red-600 p-2.5 text-white shadow-md focus:bg-red-700 focus:outline-none"
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
            d="M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0V18zM8 6.12c2 0 3 2.88 3 4.88 0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5S5.498 6.12 8 6.12zm12.054 7.978l-.217 1.231a2.75 2.75 0 0 1-5.417-.955l.218-1.23 5.416.954zM18.178 1.705c2.464.434 4.018 3.124 3.584 5.586-.434 2.463-1.187 3.853-1.36 4.838l-5.417-.955-.232-1.564c-.232-1.564-.55-2.636-.377-3.62.347-1.97 1.832-4.632 3.802-4.285z"
          />
        </svg>
      </button>
    </template>

    <section class="mb-16 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl">Frühmittelalter</h2>
      <h4 class="mb-5 text-center font-heading">
        Mitte 6. Jahrhundert bis ca. 1050
      </h4>
      <p>
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
      <p>
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
