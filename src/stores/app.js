import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    simDelayTime: 1000 * 60 * 3, // 3 minutes
    simMaxRandomTime: 10 * 1000, // 10 seconds
    simBackgroundColor: '#fff',
    simRunning: false,
    simElapsedTime: 0,
    circleMinRadius: 0,
    circleMaxRadius: 800,
    circleGrowTime: 2000,
    circleEnablePulse: false,
    circleEnableMovement: false,
    circleBackgroundColor: '#000',
  }),

  getters: {

  },

  actions: {

  },

  persist: true,
});
