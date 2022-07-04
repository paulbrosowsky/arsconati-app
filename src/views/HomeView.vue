<script setup>
import PageLayout from '@/components/PageLayout.vue'
import ContentText from '@/components/ContentText.vue'
import contents from '@/data/home.json'
// import { useGuideStore } from '../stores/guideStore'
import { onBeforeUnmount } from 'vue'

// const store = useGuideStore()

// onBeforeUnmount(() => store.setLoading())
</script>
<template>
  <PageLayout :bg-image="contents.titleImage">
    <template #title>{{ contents.title }}</template>
    <template #subtitle>
      {{ contents.subtitle }}
    </template>

    <template #content>
      <ContentText :content="contents.body" />

      <section class="mt-10 bg-gray-100 px-4 py-10">
        <div
          class="mb-5 rounded-xl border-2 border-amber-500 bg-white shadow-lg"
        >
          <RouterLink :to="{ name: 'art' }" class="flex items-center">
            <div class="px-5 text-amber-500">
              <svg
                class="h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M13.289 6.216l4.939-3.841a1 1 0 0 1 1.32.082l2.995 2.994a1 1 0 0 1 .082 1.321l-3.84 4.938a7.505 7.505 0 0 1-7.283 9.292C8 21.002 3.5 19.5 1 18c3.98-3 3.047-4.81 3.5-6.5 1.058-3.95 4.842-6.257 8.789-5.284zm3.413 1.879c.065.063.13.128.193.194l1.135 1.134 2.475-3.182-1.746-1.746-3.182 2.475 1.125 1.125z"
                />
              </svg>
            </div>
            <div class="px-4 py-3">
              <h3 class="mb-2 font-heading text-xl">Kunst</h3>
              <p class="text-sm">
                Austellung von Fritz Stahlecker neben (Original-) Drucken von
                anderen bekannten Künstler.
              </p>
            </div>
          </RouterLink>
        </div>

        <div class="rounded-xl border-2 border-red-600 bg-white shadow-lg">
          <RouterLink :to="{ name: 'history' }" class="flex items-center">
            <div class="px-5 text-red-600">
              <svg
                class="h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"
                />
              </svg>
            </div>
            <div class="px-4 py-3">
              <h3 class="mb-2 font-heading text-xl">Geschichte</h3>
              <p class="text-sm">
                Lassen Sie sich bequem durch unsere Geschichtsausstellung
                begleiten.
              </p>
            </div>
          </RouterLink>
        </div>
      </section>
    </template>
  </PageLayout>
</template>
