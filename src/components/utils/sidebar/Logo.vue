<script setup>
defineProps({
  menus: Array,
  isSidebarActive: Boolean,
});
</script>
<template>
  <div class="px-2 text-2xl font-bold">
    <a>
      <span class="text-teal-400">.</span>
      <span class="text-rose-600">.</span>
      <span>{{ isSidebarActive ? "monibil" : "m" }}</span>
    </a>
  </div>
</template>
<style scoped></style>
