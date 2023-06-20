<script setup>
defineProps({
  team: Object,
  isSidebarOpen: Boolean,
});
</script>
<template>
  <div class="flex items-center justify-between py-1 space-x-2 text-zinc-400">
    <div
      class="w-5 h-5 text-center border rounded"
      :class="{
        'border-transparent text-teal-400 font-semibold  bg-teal-200':
          team.primary,
      }"
    >
      {{ team.name.substring("0", "1") }}
    </div>
    <div class="text-xs" v-if="isSidebarOpen">
      {{ team.name }}
    </div>
  </div>
</template>
<style scoped></style>
