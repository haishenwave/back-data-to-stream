<template>
  <div class="w-full h-full flex flex-col relative overflow-hidden">
    <div class="flex justify-between items-center mb-2 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">本场流量趋势</h3>
      <div class="flex items-center space-x-2 text-[9px]">
        <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1"></span><span class="text-gray-400">页面浏览</span></div>
        <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span><span class="text-gray-400">独立访客</span></div>
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
import { userStore } from '@/store/user.js';

const chartRef = ref(null);
const chartContainer = ref(null);
let myChart = null;
let resizeObserver = null;

onMounted(() => {
  const { xAxis, pv, uv } = userStore.currentAccount.dashboardData.trafficTrend;

  myChart = echarts.init(chartRef.value);
  const option = {
    grid: { top: '10%', left: '0%', right: '5%', bottom: '0%', containLabel: true },
    tooltip: { trigger: 'axis', backgroundColor: 'rgba(16, 27, 54, 0.9)', borderColor: '#2563eb', textStyle: { color: '#fff' } },
    xAxis: { type: 'category', boundaryGap: false, data: xAxis, axisLabel: { color: '#666', fontSize: 9 }, axisLine: { lineStyle: { color: '#2d3748' } } },
    yAxis: [
      { type: 'value', splitLine: { lineStyle: { color: '#1a1f35' } }, axisLabel: { color: '#666', fontSize: 9 } },
      { type: 'value', show: false }
    ],
    series: [
      { name: '页面浏览', type: 'line', smooth: true, symbol: 'none',
        data: pv,
        lineStyle: { color: '#3b82f6', width: 2 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(59, 130, 246, 0.3)' }, { offset: 1, color: 'rgba(59, 130, 246, 0)' }]) } },
      { name: '独立访客', type: 'line', yAxisIndex: 1, smooth: true, symbol: 'none',
        data: uv,
        lineStyle: { color: '#10b981', width: 2 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(16, 185, 129, 0.2)' }, { offset: 1, color: 'rgba(16, 185, 129, 0)' }]) } }
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