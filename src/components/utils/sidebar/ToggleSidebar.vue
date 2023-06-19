<script setup>
import { ref } from "vue";

const emits = defineEmits(["sidebarActive"]);
let isSidebarActive = ref(true);
</script>
<template>
  <div
    class="absolute bottom-5 flex items-center space-x-2 cursor-pointer rounded font-semibold text-zinc-400"
    @click="emits('sidebarActive', (isSidebarActive = !isSidebarActive))"
  >
    <Icon
      :name="
        isSidebarActive
          ? 'md-keyboarddoublearrowleft-round'
          : 'md-keyboarddoublearrowright-round'
      "
    />
    <span v-if="isSidebarActive">Collapse</span>
  </div>
</template>
<style scoped></style>
