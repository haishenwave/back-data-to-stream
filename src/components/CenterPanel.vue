<template>
  <div class="w-full h-full flex flex-col space-y-4 overflow-hidden">
    <div class="flex-shrink-0">
      <TopMetrics />
    </div>

    <div class="flex-1 bg-card-bg/80 rounded-md border border-white/10 p-4 shadow-lg min-h-0">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xs font-medium text-gray-200">综合趋势</h3>
      </div>
      <div class="w-full h-full">
        <div class="w-full h-full bg-blue-500/5 rounded flex items-center justify-center text-gray-500 italic">
          Main Trend Chart Placeholder
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMetrics from './center/TopMetrics.vue';
</script>