import { defineStore } from 'pinia'
import { getSections, getExhibits } from '../data'

export const useGuideStore = defineStore('guide', {
  state: () => ({
    currentStep: 1,
    sections: [],
    exhibits: [],
    loading: false,
  }),

  getters: {
    currentSection(state) {
      return state.sections.find(
        (section) => section.step === state.currentStep
      )
    },

    sectionExhibits(state) {
      return state.exhibits.filter(
        (exhibit) => exhibit.sectionId === this.currentSection.id
      )
    },
  },

  actions: {
    incrementStep() {
      if (this.currentStep < this.sections.length) {
        this.loading = true
        this.currentStep++

        localStorage.setItem('currentStep', this.currentStep)

        setTimeout(() => (this.loading = false), 2500)
      }
    },

    decrementStep() {
      if (this.currentStep > 1) {
        this.loading = true
        this.currentStep--

        localStorage.setItem('currentStep', this.currentStep)

        setTimeout(() => (this.loading = false), 2500)
      }
    },

    restoreStep() {
      const storedStep = localStorage.getItem('currentStep')
      if (storedStep) {
        this.currentStep = parseInt(storedStep)
      }
    },

    async fetchSections() {
      this.loading = true
      this.sections = await getSections()
      setTimeout(() => (this.loading = false), 2500)
    },

    async fetchExhibits() {
      this.loading = true
      this.exhibits = await getExhibits()
      setTimeout(() => (this.loading = false), 2500)
    },
  },
})
