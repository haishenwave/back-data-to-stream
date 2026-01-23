<template>
  <div class="w-full h-full flex flex-col space-y-3 min-h-0">
    <div class="flex-1 w-full min-h-0 bg-card-bg/80 rounded-md border border-white/10 p-4 shadow-lg flex flex-col overflow-hidden">
      <AudienceProfile />
    </div>

    <div class="flex-1 w-full min-h-0 bg-card-bg/80 rounded-md border border-white/10 p-4 shadow-lg flex flex-col overflow-hidden">
      <ProductRanking />
    </div>
  </div>
</template>

<script setup>
import AudienceProfile from './right/AudienceProfile.vue';
import ProductRanking from './right/ProductRanking.vue';
</script>