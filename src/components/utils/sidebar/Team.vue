<script setup>
defineProps({
  teams: Array,
  isSidebarActive: Boolean,
});
</script>
<template>
  <div class="px-2">
    <a href="" class="text-sm font-bold">Team</a>

    <div class="mt-2">
      <div
        class="flex flex-col"
        :class="isSidebarActive ? 'items-start' : 'items-center'"
      >
        <div v-for="team in teams" :key="team.name">
          <div
            class="flex items-center justify-between py-1 space-x-2 text-zinc-400"
          >
            <div
              class="w-5 h-5 text-center border rounded"
              :class="{
                'border-transparent text-teal-400 font-semibold  bg-teal-200':
                  team.primary,
              }"
            >
              {{ team.name.substring("0", "1") }}
            </div>
            <div class="text-[10px]" v-if="isSidebarActive">
              {{ team.name }}
            </div>
          </div>
        </div>

        <p class="mt-1 text-[10px] text-zinc-400 whitespace-nowrap">
          + 1123193280 <span v-if="isSidebarActive"> more users.</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
