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
    setLoading() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2500)
    },

    incrementStep() {
      if (this.currentStep < this.sections.length) {
        this.setLoading()
        this.currentStep++

        localStorage.setItem('currentStep', this.currentStep)
      }
    },

    decrementStep() {
      if (this.currentStep > 1) {
        this.setLoading()
        this.currentStep--

        localStorage.setItem('currentStep', this.currentStep)
      }
    },

    restoreStep() {
      const storedStep = localStorage.getItem('currentStep')
      if (storedStep) {
        this.currentStep = parseInt(storedStep)
      }
    },

    async fetchSections() {
      this.setLoading()
      this.sections = await getSections()
    },

    async fetchExhibits() {
      this.setLoading()
      this.exhibits = await getExhibits()
    },
  },
})
