<script setup>
import { ref } from "vue";

import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import Team from "./Team.vue";
import ToggleSidebar from "./ToggleSidebar.vue";

const isSidebarActive = ref(true);

const menus = ref([
  {
    title: "Dashboard",
    icon: "md-spacedashboard-outlined",
  },
  {
    title: "Companies",
    icon: "md-homework-outlined",
  },
  {
    title: "Projects",
    icon: "hi-folder",
  },
  {
    title: "Sensors",
    icon: "hi-link",
  },
  {
    title: "Settings",
    icon: "co-cog",
  },
]);

const teams = ref([
  {
    name: "gorkem",
    color: "rose",
    primary: true,
  },
  {
    name: "sertac",
    color: "blue",
    primary: false,
  },
  {
    name: "emre",
    color: "pink",
    primary: false,
  },
  // {
  //   name: "emrah",
  //   color: "emerald",
  // },
]);
</script>
<template>
  <aside>
    <div
      :class="[isSidebarActive ? 'w-48' : 'items-center w-20']"
      class="sticky top-0 flex flex-col min-h-screen p-4 space-y-4 text-xs transition-all duration-100 ease-in-out border-r bg-gradient-to-t from-zinc-100 via-zinc-50 to-white"
    >
      <Logo :is-sidebar-active="isSidebarActive" />

      <Navbar :menus="menus" :is-sidebar-active="isSidebarActive" />

      <Team :teams="teams" :is-sidebar-active="isSidebarActive" />

      <ToggleSidebar @sidebar-active="(e) => (isSidebarActive = e)" />
    </div>
  </aside>
</template>
<style scoped></style>
