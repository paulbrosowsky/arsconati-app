import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    loading: false,
  }),

  actions: {
    setLoading() {
      this.loading = true
      setTimeout(
        () => (this.loading = false),
        import.meta.env.VITE_LOADING_TIME
      )
    },
  },
})
