<script setup>
import TeamItem from "./TeamItem.vue";

defineProps({
  teams: Array,
  isSidebarOpen: Boolean,
});
</script>
<template>
  <div class="px-2" :class="{ 'text-center': !isSidebarOpen }">
    <a href="" class="text-sm font-bold">Team</a>

    <div class="mt-2">
      <div
        class="flex flex-col"
        :class="isSidebarOpen ? 'items-start' : 'items-center'"
      >
        <TeamItem
          v-for="team in teams"
          :key="team.name"
          :team="team"
          :is-sidebar-open="isSidebarOpen"
        />

        <p class="mt-1 text-xs text-zinc-400 whitespace-nowrap">
          + 12 <span v-if="isSidebarOpen"> more users.</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
