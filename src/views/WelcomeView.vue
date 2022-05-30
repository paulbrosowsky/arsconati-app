<script setup>
import PageLayout from '@/components/PageLayout.vue'
</script>
<template>
  <PageLayout bg-image="/images/welcome-background.jpeg">
    <template #title>Herzlich Willkommen</template>
    <template #subtitle>
      in die Welt der Kunst, Kultur und Geschichte!
    </template>

    <div>
      <section class="mb-10 px-4">
        <h2 class="mb-5 text-center font-heading text-2xl">
          Ihr digitaler Meseumsguide.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nesciunt dolorum repellat, aperiam eaque repudiandae deleniti et
          accusantium saepe quas distinctio ad, iure ut adipisci mollitia
          corrupti soluta sapiente cupiditate!
        </p>
      </section>

      <section class="bg-neutral-100 px-4 py-8">
        <h2 class="mb-2 text-center font-heading text-2xl">Optionen</h2>
        <h4 class="mb-5 text-center font-heading">
          Für eien besseres Meuseumserlebnis stehen Ihnen folgenede
          Möglichkeiten zur Verfügung.
        </h4>

        <div class="mb-5 rounded-xl bg-white p-4 shadow-lg">
          <svg
            class="mx-auto h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM7.5 13h2a2.5 2.5 0 1 0 5 0h2a4.5 4.5 0 1 1-9 0z"
            />
          </svg>

          <h3 class="mb-2 text-center font-heading text-xl">Übersicht</h3>
          <p class="text-center text-sm">
            Hier finden Sie eine Übersicht über alle unsere Ausstellungsbereiche
            und Exponate.
          </p>
        </div>

        <div
          class="mb-5 rounded-xl border-2 border-red-600 bg-white p-4 shadow-lg"
        >
          <svg
            class="mx-auto h-10 w-10 fill-current text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4.965 5.096l3.546 12.41 3.04-6.08 5.637-2.255L4.965 5.096zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3z"
            />
          </svg>

          <h3 class="mb-2 text-center font-heading text-xl">Guide</h3>
          <p class="text-center text-sm">
            Lassen Sie sich bequem mit unserem digitalen Guide durch die
            Ausstellung begleiten.
          </p>
        </div>

        <div class="rounded-xl bg-white p-4 shadow-lg">
          <svg
            class="mx-auto h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            />
          </svg>

          <h3 class="mb-2 text-center font-heading text-xl">Suche</h3>
          <p class="text-center text-sm">
            Alle unsere Ausstellungsbereiche und wichtige Exponete sind mit
            einer Nummer versehen. Geben Sie die Nummner ein, und erfahren Sie
            mehr darüber.
          </p>
        </div>
      </section>
    </div>
  </PageLayout>
</template>
