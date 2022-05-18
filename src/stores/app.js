import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    simDelayTime: 1000 * 60 * 3, // 3 minutes
    simMaxRandomTime: 10 * 1000, // 10 seconds
    simBackgroundColor: 0,
    simRunning: false,
    simElapsedTime: 0,
    circleMinRadius: 0,
    circleMaxRadius: 300,
    circleEnablePulse: false,
    circleEnableMovement: false,
    circleColor: '#000',
  }),

  getters: {

  },

  actions: {

  },

  persist: true,
});
