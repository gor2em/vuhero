<script setup>
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import Team from "./Team.vue";
import ToggleSidebar from "./ToggleSidebar.vue";

import { useGeneralStore } from "../../../stores/general";
const { isSidebarOpen, isSidebarActive, isMobile } = storeToRefs(
  useGeneralStore()
);

import menus from "../../../data/menus";
import teams from "../../../data/teams";
import { storeToRefs } from "pinia";
</script>
<template>
  <aside
    class="sticky top-0 z-50 h-screen border-r bg-gradient-to-t from-zinc-100 via-zinc-50 to-white"
    :class="isMobile && !isSidebarActive ? 'hidden' : 'block'"
  >
    <div
      :class="{ '!w-20 !items-center ': !isSidebarOpen }"
      class="flex flex-col w-48 gap-5 p-5 text-xs transition-all duration-100 ease-in-out"
    >
      <Logo :is-sidebar-open="isSidebarOpen" />

      <Navbar :menus="menus" :is-sidebar-open="isSidebarOpen" />

      <Team :teams="teams" :is-sidebar-open="isSidebarOpen" />

      <ToggleSidebar :class="isMobile ? 'hidden' : ''" />
    </div>
  </aside>
</template>
<style scoped></style>
