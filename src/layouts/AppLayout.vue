<script setup>
import TheHeader from "../components/utils/header/TheHeader.vue";
import Sidebar from "../components/utils/sidebar/Sidebar.vue";
</script>
<template>
  <div class="flex">
    <Sidebar />

    <main class="w-full">
      <TheHeader />

      <router-view></router-view>
    </main>
  </div>
</template>
<style scoped></style>
