<script setup>
import Logo from "../sidebar/Logo.vue";
import SubscriptionCard from "./SubscriptionCard.vue";
import UserCard from "./UserCard.vue";

import { useGeneralStore } from "../../../stores/general";
import { storeToRefs } from "pinia";
const { isSidebarOpen, isSidebarActive } = storeToRefs(useGeneralStore());
</script>
<template>
  <header
    class="fixed top-0 right-0 w-full mx-auto border-b"
    :class="[
      isSidebarOpen ? 'md:pl-48' : 'md:pl-20',
      isSidebarActive ? 'pl-48' : '',
    ]"
  >
    <div class="container px-8 mx-auto backdrop-blur-sm">
      <div class="flex items-center justify-between h-14">
        <div class="block md:hidden">
          <Icon
            scale="1.2"
            name="md-menuopen-twotone"
            @click="isSidebarActive = !isSidebarActive"
          />
        </div>

        <div class="block md:hidden" v-if="!isSidebarActive">
          <Logo />
        </div>

        <div class="block md:hidden">
          <Icon scale="1.2" name="hi-solid-dots-vertical" />
        </div>

        <SubscriptionCard class="hidden md:flex" />
        <UserCard class="hidden md:flex" />
      </div>
    </div>
  </header>
</template>
<style scoped></style>
