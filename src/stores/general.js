import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isThemeDark: false,
    isSidebarOpen: true,
    isSidebarActive: false,
  }),
  actions: {},
  getters: {
    isMobile() {
      if (window.innerWidth <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
  persist: {
    paths: ["isThemeDark", "isSidebarOpen"],
  },
});
