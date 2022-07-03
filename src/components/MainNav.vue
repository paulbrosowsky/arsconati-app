<script setup>
import { RouterLink } from 'vue-router'
import { useHistoryStore } from '@/stores/historyStore'
import { useArtStore } from '@/stores/artStore'
import { useStore } from '@/stores/mainStore'
import { useRoute } from 'vue-router'

const store = useStore()
const historyStore = useHistoryStore()
const artStore = useArtStore()
const route = useRoute()
</script>
<template>
  <nav class="w-full px-4 py-4">
    <ul class="relative flex justify-between">
      <!-- <li class="">
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
      </li> -->
      <div
        v-if="route.name === 'history'"
        class="flex h-full w-full items-center justify-between rounded-xl bg-red-600 py-3 text-white shadow-md"
      >
        <button
          class="h-full px-4 focus:outline-none"
          @click="historyStore.decrementStep"
          :disabled="store.loading"
        >
          <svg
            class="mx-auto h-6 w-6 fill-current"
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
        <span class="flex-nowrap font-semibold">
          <span class="mr-2 text-sm uppercase">Geschichte</span>
          <span>
            {{ historyStore.currentStep }} / {{ historyStore.sections.length }}
          </span>
        </span>
        <button
          class="h-full px-4 focus:outline-none"
          @click="historyStore.incrementStep"
          :disabled="store.loading"
        >
          <svg
            class="mx-auto h-6 w-7 fill-current"
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
        :to="{ name: 'history' }"
        class="mr-2 flex h-full items-center justify-center rounded-xl bg-red-600 py-3 px-3.5 text-center text-white shadow-md"
        :class="{ 'w-full': route.name === 'home' }"
        v-if="route.name !== 'history'"
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
            d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"
          />
        </svg>

        <p
          class="ml-2 text-sm font-semibold uppercase"
          v-if="route.name !== 'art'"
        >
          Geschichte
        </p>
      </RouterLink>
      <!-- Kunst Nav -->
      <div
        v-if="route.name === 'art'"
        class="flex h-full w-full items-center justify-between rounded-xl bg-amber-500 py-3 text-white shadow-md"
      >
        <button
          class="h-full px-4 focus:outline-none"
          @click="artStore.decrementStep"
          :disabled="store.loading"
        >
          <svg
            class="mx-auto h-6 w-6 fill-current"
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
        <span class="flex-nowrap font-semibold">
          <span class="mr-2 text-sm uppercase">Kunst</span>
          <span>
            {{ artStore.currentStep }} / {{ artStore.sections.length }}
          </span>
        </span>
        <button
          class="h-full px-4 focus:outline-none"
          @click="artStore.incrementStep"
          :disabled="store.loading"
        >
          <svg
            class="mx-auto h-6 w-6 fill-current"
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
        :to="{ name: 'art' }"
        class="pl ml-2 flex h-full items-center justify-center rounded-xl bg-amber-500 py-3 px-3.5 text-center text-white shadow-md"
        :class="{ 'w-full': route.name === 'home' }"
        v-if="route.name !== 'art'"
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
            d="M13.289 6.216l4.939-3.841a1 1 0 0 1 1.32.082l2.995 2.994a1 1 0 0 1 .082 1.321l-3.84 4.938a7.505 7.505 0 0 1-7.283 9.292C8 21.002 3.5 19.5 1 18c3.98-3 3.047-4.81 3.5-6.5 1.058-3.95 4.842-6.257 8.789-5.284zm3.413 1.879c.065.063.13.128.193.194l1.135 1.134 2.475-3.182-1.746-1.746-3.182 2.475 1.125 1.125z"
          />
        </svg>

        <p
          class="ml-2 text-sm font-semibold uppercase"
          v-if="route.name !== 'history'"
        >
          Kunst
        </p>
      </RouterLink>
    </ul>
  </nav>
</template>
