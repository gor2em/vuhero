<script setup>
import TheHeader from "../components/utils/header/TheHeader.vue";
import Sidebar from "../components/utils/sidebar/Sidebar.vue";
</script>
<template>
  <div class="flex">
    <Sidebar />

    <main class="w-full mx-auto">
      <TheHeader />
      <div class="container px-8 py-4 mx-auto mt-16 mb-4">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<style scoped></style>
