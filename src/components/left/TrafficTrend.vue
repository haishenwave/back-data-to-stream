<template>
  <div class="w-full h-full flex flex-col relative overflow-hidden">
    <div class="flex justify-between items-center mb-2 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">流量趋势</h3>
      <div class="flex items-center space-x-2 text-[9px]">
        <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1"></span><span class="text-gray-400">自然</span></div>
        <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span><span class="text-gray-400">付费</span></div>
      </div>
    </div>

    <div class="flex-1 w-full min-h-0 relative" ref="chartContainer">
      <div ref="chartRef" class="w-full h-full"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
const chartContainer = ref(null);
let myChart = null;
let resizeObserver = null;

onMounted(() => {
  myChart = echarts.init(chartRef.value);
  const option = {
    grid: { top: '10%', left: '0%', right: '5%', bottom: '0%', containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: ['19:54', '20:05', '20:16', '20:27', '20:38', '20:49'], axisLabel: { color: '#666', fontSize: 9 }, axisLine: { lineStyle: { color: '#2d3748' } } },
    yAxis: { type: 'value', max: 1000, splitLine: { lineStyle: { color: '#1a1f35' } }, axisLabel: { color: '#666', fontSize: 9 } },
    series: [
      { name: '自然', type: 'line', smooth: true, symbol: 'none', data: [650, 800, 720, 850, 780, 700], lineStyle: { color: '#3b82f6', width: 2 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(59, 130, 246, 0.3)' }, { offset: 1, color: 'rgba(59, 130, 246, 0)' }]) } },
      { name: '付费', type: 'line', smooth: true, symbol: 'none', data: [0, 0, 0, 0, 0, 0], lineStyle: { color: '#10b981', width: 2 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(16, 185, 129, 0.2)' }, { offset: 1, color: 'rgba(16, 185, 129, 0)' }]) } }
    ]
  };
  myChart.setOption(option);

  resizeObserver = new ResizeObserver(() => myChart.resize());
  if (chartContainer.value) resizeObserver.observe(chartContainer.value);
});

onUnmounted(() => {
  myChart?.dispose();
  resizeObserver?.disconnect();
});
</script>