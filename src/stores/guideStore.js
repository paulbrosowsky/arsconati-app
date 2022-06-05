import { defineStore } from 'pinia'
import { sections } from '../data'

export const useGuideStore = defineStore({
  state: () => ({
    currentStep: 1,
    sections: sections,
  }),
  getters: {},
  actions: {},
})
