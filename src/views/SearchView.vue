<script setup></script>
<template>
  <section
    class="flex h-screen w-screen flex-col items-center justify-center px-10"
  >
    <h2 class="mb-5 text-center font-heading text-2xl font-medium">
      Suche Sie was bestimmtes?
    </h2>
    <h4 class="mb-10 text-center text-sm">
      Geben Sie die Nummer von dem Exponat ein, von dem Sie mehr erfaren wollen.
    </h4>

    <form
      class="flex flex-col items-center"
      @submit.prevent="$router.push({ name: 'exhibit', params: { id: 1 } })"
    >
      <input
        class="w-20 overflow-hidden rounded-xl border-4 border-white bg-gray-100 py-5 px-5 text-center text-2xl font-semibold leading-none shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        type="number"
        size="2"
        placeholder="00"
        maxlength="2"
      />
      <button
        class="mt-10 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold uppercase text-white shadow-lg shadow-amber-200 focus:outline-none"
        type="submit"
      >
        Exponat suchen
      </button>
    </form>
  </section>
</template>
