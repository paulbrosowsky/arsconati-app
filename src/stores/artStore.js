import { defineStore } from 'pinia'
import { getArtSections } from '../data'
import { useStore } from '@/stores/mainStore'

export const useArtStore = defineStore('art', {
  state: () => ({
    currentStep: 1,
    sections: [],
  }),

  getters: {
    currentSection(state) {
      return state.sections.find(
        (section) => section.step === state.currentStep
      )
    },
  },

  actions: {
    incrementStep() {
      if (this.currentStep < this.sections.length) {
        const mainStore = useStore()
        mainStore.setLoading()
        this.currentStep++

        localStorage.setItem('currentArtStep', this.currentStep)
      }
    },

    decrementStep() {
      if (this.currentStep > 1) {
        const mainStore = useStore()
        mainStore.setLoading()
        this.currentStep--

        localStorage.setItem('currentArtStep', this.currentStep)
      }
    },

    restoreStep() {
      const storedStep = localStorage.getItem('currentArtStep')
      if (storedStep) {
        this.currentStep = parseInt(storedStep)
      }
    },

    async fetchSections() {
      const mainStore = useStore()
      mainStore.setLoading()
      this.sections = await getArtSections()
    },
  },
})
