<template>
  <div class="w-full h-full flex flex-col space-y-4 min-h-0">
    <div class="flex-shrink-0">
      <TopMetrics />
    </div>

    <div class="flex-1 w-full min-h-0 bg-card-bg/80 rounded-md border border-white/10 p-5 shadow-lg flex flex-col overflow-hidden">
      <BottomChart />
    </div>
  </div>
</template>

<script setup>
import TopMetrics from './center/TopMetrics.vue';
import BottomChart from './center/BottomChart.vue';
</script>