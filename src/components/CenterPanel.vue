<template>
  <div class="w-full h-full flex flex-col space-y-4 overflow-hidden">
    <div class="flex-shrink-0">
      <TopMetrics />
    </div>

    <div class="flex-1 bg-card-bg/80 rounded-md border border-white/10 p-5 shadow-lg min-h-0 overflow-hidden">
      <BottomChart />
    </div>
  </div>
</template>

<script setup>
import TopMetrics from './center/TopMetrics.vue';
import BottomChart from './center/BottomChart.vue';
</script>