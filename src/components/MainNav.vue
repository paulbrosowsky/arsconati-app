<script setup>
import { RouterLink } from 'vue-router'
import { useGuideStore } from '@/stores/guideStore'
import { useRoute } from 'vue-router'

const store = useGuideStore()
const route = useRoute()
</script>
<template>
  <nav class="w-full px-4 py-4">
    <ul class="relative flex justify-between">
      <li class="">
        <RouterLink
          class="flex w-full justify-center rounded-xl bg-gray-100 p-3 shadow-md"
          :to="{ name: 'search' }"
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
              d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            />
          </svg>
        </RouterLink>
      </li>

      <li class="w-full pl-4">
        <div
          v-if="route.name === 'guide'"
          class="flex h-full w-full items-center justify-between rounded-xl bg-red-600 text-white shadow-md"
        >
          <button
            class="h-full w-1/3 focus:outline-none"
            @click="store.decrementStep"
            :disabled="store.loading"
          >
            <svg
              class="mx-auto h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
              />
            </svg>
          </button>
          <span class="flex-nowrap font-semibold"
            >{{ store.currentStep }} von {{ store.sections.length }}</span
          >
          <button
            class="h-full w-1/3 focus:outline-none"
            @click="store.incrementStep"
            :disabled="store.loading"
          >
            <svg
              class="mx-auto h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              />
            </svg>
          </button>
        </div>
        <RouterLink
          :to="{ name: 'guide' }"
          class="mx-auto flex h-full items-center justify-center rounded-xl bg-red-600 text-center text-white shadow-md"
          v-if="route.name !== 'guide'"
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
              d="M2.9 2.3l18.805 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3z"
            />
          </svg>
          <p class="ml-2 text-sm font-semibold uppercase">zum Guide</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
