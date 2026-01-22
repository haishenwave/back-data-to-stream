<template>
  <div class="w-full h-full flex flex-col space-y-3 p-1">
    <div class="flex-1 bg-card-bg/80 rounded-md border border-white/10 p-4 shadow-lg overflow-hidden">
      <TrafficSource />
    </div>

    <div class="flex-1 bg-card-bg/80 rounded-md border border-white/10 p-4 shadow-lg overflow-hidden">
      <TrafficTrend />
    </div>

    <div class="flex-1 bg-card-bg/80 rounded-md border border-white/10 p-4 shadow-lg overflow-hidden">
      <TrafficConversion />
    </div>
  </div>
</template>

<script setup>
import TrafficSource from './left/TrafficSource.vue';
import TrafficTrend from './left/TrafficTrend.vue';
import TrafficConversion from './left/TrafficConversion.vue';
</script>