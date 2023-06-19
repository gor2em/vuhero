<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useGeneralStore } from "../../../stores/general";
const { isSidebarOpen } = storeToRefs(useGeneralStore());

const currentSidebarIcon = computed(() =>
  isSidebarOpen.value
    ? "md-keyboarddoublearrowleft-round"
    : "md-keyboarddoublearrowright-round"
);
</script>
<template>
  <div
    class="absolute flex items-center space-x-2 font-semibold rounded cursor-pointer bottom-5 text-zinc-400"
    @click="isSidebarOpen = !isSidebarOpen"
  >
    <Icon :name="currentSidebarIcon" />
    <span v-if="isSidebarOpen">Collapse</span>
  </div>
</template>
<style scoped></style>
