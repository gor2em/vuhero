<script setup>
import SubscriptionCard from "./SubscriptionCard.vue";
import UserCard from "./UserCard.vue";
</script>
<template>
  <header class="border-b bg-white/50">
    <div class="backdrop-blur-sm">
      <div class="flex items-center justify-between p-4 h-14">
        <SubscriptionCard />
        <UserCard />
      </div>
    </div>
  </header>
</template>
<style scoped></style>
