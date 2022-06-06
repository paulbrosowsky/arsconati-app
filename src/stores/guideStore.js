import { defineStore } from 'pinia'
import { getSections } from '../data'

export const useGuideStore = defineStore('guide', {
  state: () => ({
    currentStep: 1,
    sections: [],
    loading: false,
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
        this.loading = true
        this.currentStep++
        setTimeout(() => (this.loading = false), 2500)
      }
    },

    decrementStep() {
      if (this.currentStep > 1) {
        this.loading = true
        this.currentStep--
        setTimeout(() => (this.loading = false), 2500)
      }
    },

    async fetchSections() {
      this.loading = true
      this.sections = await getSections()
      setTimeout(() => (this.loading = false), 2500)
    },
  },
})
