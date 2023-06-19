<script setup>
defineProps({
  menus: Array,
  isSidebarOpen: Boolean,
});
</script>
<template>
  <nav>
    <ul>
      <li
        v-for="(menu, index) in menus"
        :key="menu.title"
        class="flex items-center px-2 py-2 my-2 space-x-4 font-medium rounded cursor-pointer hover:bg-teal-50 text-zinc-400 hover:!text-teal-400"
        :class="{
          'bg-teal-50': index === 0,
        }"
      >
        <Icon
          :name="menu.icon"
          class=""
          :class="{
            '!text-teal-400': index === 0,
          }"
        />
        <a
          href=""
          class="text-xs"
          :class="{
            '!text-teal-400': index === 0,
          }"
          v-if="isSidebarOpen"
          >{{ menu.title }}</a
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
