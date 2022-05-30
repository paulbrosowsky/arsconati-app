<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="w-full p-4">
    <ul class="relative flex justify-between rounded-2xl bg-gray-100 shadow-lg">
      <RouterLink
        :to="{ name: 'guide' }"
        class="absolute left-0 right-0 z-10 -my-1 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-red-600 p-5 text-center text-white shadow shadow-red-700"
      >
        <svg
          class="ml-1 h-6 w-6 fill-current"
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
      </RouterLink>
      <li class="w-full">
        <RouterLink
          class="flex w-full justify-center py-5"
          :to="{ name: 'home' }"
        >
          <svg
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
        </RouterLink>
      </li>
      <li class="relative w-2/3"></li>
      <li class="w-full">
        <RouterLink
          class="flex w-full justify-center py-5"
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
    </ul>
  </nav>
</template>
