<script setup>
defineProps({
  isSidebarOpen: Boolean,
});
</script>
<template>
  <div class="px-2 text-2xl font-bold">
    <a>
      <span class="text-rose-600">.</span>
      <span>{{ isSidebarOpen ? "vuhero" : "v" }}</span>
    </a>
  </div>
</template>
<style scoped></style>
