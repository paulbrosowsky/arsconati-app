import { defineStore } from 'pinia'
import { getHistorySections, getExhibits } from '../data'
import { useStore } from '@/stores/mainStore'

export const useHistoryStore = defineStore('history', {
  state: () => ({
    currentStep: 1,
    sections: [],
    exhibits: [],
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
        const mainStore = useStore()
        mainStore.setLoading()
        this.currentStep++

        localStorage.setItem('currentStep', this.currentStep)
      }
    },

    decrementStep() {
      if (this.currentStep > 1) {
        const mainStore = useStore()
        mainStore.setLoading()
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
      const mainStore = useStore()
      mainStore.setLoading()
      this.sections = await getHistorySections()
    },

    async fetchExhibits() {
      const mainStore = useStore()
      mainStore.setLoading()
      this.exhibits = await getExhibits()
    },
  },
})
