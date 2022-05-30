<script setup>
import PageLayout from '@/components/PageLayout.vue'
import SectionCard from '@/components/SectionCard.vue'
import ExhibitCard from '@/components/ExhibitCard.vue'

const sections = [
  {
    image: 'src/assets/images/vorgeschichte.jpeg',
    title: 'Urzeit',
    subtitle: 'vor 400 Mio. - 300.000 Jahre',
    description: 'Fosilien von der ersten Tieren und Eszeitbewohner',
  },
  {
    image: 'src/assets/images/altertum.jpeg',
    title: 'Altertum',
    subtitle: '2.500 v. Chr. - 600 n. Chr',
    description: 'Altes Ägypten, Antikes Grichenland, Römisches Reich',
  },
  {
    image: 'src/assets/images/mittelalter.jpeg',
    title: 'Mittelalter',
    subtitle: '2.500 v. Chr. - 600 n. Chr',
    description:
      'Europäisches Mittelalter, Ritter Rüstungen, 30-jähriger Krieg',
  },
]

const exhibits = [
  {
    image: 'src/assets/images/tutankhamun.jpeg',
    searchIndex: '22',
    title: 'Tutankhamun Maske',
  },
  {
    image: 'src/assets/images/lanzelot.jpeg',
    searchIndex: '14',
    title: 'Turnierrüstung',
  },
  {
    image: 'src/assets/images/samurai.jpeg',
    searchIndex: '03',
    title: 'Samurai-Rüstungen',
  },
  {
    image: 'src/assets/images/napoleon.jpeg',
    searchIndex: '08',
    title: 'Napoleons Zimmer',
  },
  {
    image: 'src/assets/images/gusaren.jpeg',
    searchIndex: '23',
    title: 'Gusaren-Uniform',
  },
]
</script>
<template>
  <PageLayout bg-image="src/assets/images/home-background.jpeg">
    <template #title>Übersicht</template>
    <template #subtitle>
      Hier finden Sie eine Übersicht über alle unsere Ausstellungsbereiche und
      Exponate.
    </template>

    <section class="mb-16 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl">ARS CONATI</h2>
      <h4 class="mb-5 text-center font-heading">Kunst, Kultur, Geschichte</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
        accusantium saepe quas distinctio ad, iure ut adipisci mollitia corrupti
        soluta sapiente cupiditate!
      </p>
    </section>

    <section class="my-10 bg-neutral-100 py-10 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl">
        Aussellungsbereiche
      </h2>
      <h4 class="mb-10 text-center font-heading">
        Von der Enstehung der Erde bis zu Neuzeit
      </h4>

      <div>
        <SectionCard
          class="mb-5"
          v-for="section in sections"
          :section="section"
        ></SectionCard>
      </div>
    </section>

    <section class="my-16 px-4">
      <h2 class="mb-5 text-center font-heading text-2xl">Wichtige Exponate</h2>
      <h4 class="mb-10 text-center font-heading">
        Erfahren Sie mehr über unsere interessanteste Stücke. Es lohnt sich!
      </h4>
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
