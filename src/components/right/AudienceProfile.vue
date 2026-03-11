<template>
  <div class="w-full h-full flex flex-col overflow-hidden relative">
    <div class="flex justify-between items-center mb-2 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">本场观看用户画像</h3>
      <span class="text-[9px] text-gray-500 italic">人群洞察</span>
    </div>
    <div class="flex-1 w-full min-h-0 relative" ref="chartContainer">
      <div ref="ageChartRef" class="w-full h-full"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { userStore } from '@/store/user.js';

const ageChartRef = ref(null);
const chartContainer = ref(null);
let myChart = null;
let resizeObserver = null;

onMounted(() => {
  const { labels, data } = userStore.currentAccount.dashboardData.audienceProfile;

  myChart = echarts.init(ageChartRef.value);
  myChart.setOption({
    grid: { left: '3%', right: '12%', bottom: '3%', top: '5%', containLabel: true },
    xAxis: { type: 'value', show: false },
    yAxis: {
      type: 'category',
      data: labels,
      axisLabel: { color: '#94a3b8', fontSize: 10, interval: 0 },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: data,
      barWidth: '50%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ offset: 0, color: '#3b82f6' }, { offset: 1, color: 'rgba(59, 130, 246, 0.1)' }]),
        borderRadius: [0, 4, 4, 0]
      },
      label: { show: true, position: 'right', color: '#fff', fontSize: 9, formatter: '{c}%' }
    }]
  });

  resizeObserver = new ResizeObserver(() => myChart.resize());
  if (chartContainer.value) resizeObserver.observe(chartContainer.value);
});

onUnmounted(() => {
  myChart?.dispose();
  resizeObserver?.disconnect();
});
</script>