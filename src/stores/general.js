import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isThemeDark: false,
    isSidebarOpen: true,
  }),
  actions: {},
  persist: {
    paths: ["isThemeDark", "isSidebarOpen"],
  },
});
