<script setup>
import { useRoute } from 'vue-router'
import Cookies from 'js-cookie'

const route = useRoute()
const emit = defineEmits(['submit'])

function setCookie() {
  Cookies.set('access-token', route.query.token, { expires: 1 })
  emit('submit')
}
</script>
<template>
  <div
    class="fixed left-0 top-0 bottom-0 right-0 z-30 flex items-center justify-center bg-indigo-900/50 p-6 backdrop-blur-sm"
  >
    <div
      class="z-20 flex h-4/5 w-full flex-col justify-center rounded-2xl bg-white px-6 py-10 shadow-xl"
    >
      <h1 class="mb-10 text-center text-2xl font-semibold text-gray-600">
        🍪 Auch wir verwenden Cookies!
      </h1>
      <p class="text-sm">
        Damit Sie sicher auf die Inhalte zugreifen können setzen wir ein
        <b>funktionales Cookie</b>. Dieser wird nach 24 Stunden automatisch
        gelöscht. Wir erheben keine Daten und benutzen auch keine Traking-Tools
        oder ähnl.
      </p>

      <div class="mt-5 flex flex-col">
        <button
          class="mb-2 rounded-xl bg-red-600 py-3 text-sm font-semibold uppercase text-white"
          @click="setCookie"
        >
          Einverstanden
        </button>
        <button class="py-2 text-gray-600" @click="$emit('submit')">
          Nee, lieber nicht
        </button>
      </div>
    </div>
  </div>
</template>
