<template>
  <div class="w-full h-full flex flex-col relative overflow-hidden">
    <div class="flex justify-between items-center mb-2 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">近7日流量趋势</h3>
      <div class="flex items-center space-x-2 text-[9px]">
        <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1"></span><span class="text-gray-400">页面浏览</span></div>
        <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span><span class="text-gray-400">商品访客</span></div>
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
    tooltip: { trigger: 'axis', backgroundColor: 'rgba(16, 27, 54, 0.9)', borderColor: '#2563eb', textStyle: { color: '#fff' } },
    // 替换为周期日期
    xAxis: { type: 'category', boundaryGap: false, data: ['06.15', '06.16', '06.17', '06.18', '06.19', '06.20', '06.21'], axisLabel: { color: '#666', fontSize: 9 }, axisLine: { lineStyle: { color: '#2d3748' } } },
    yAxis: [
      { type: 'value', splitLine: { lineStyle: { color: '#1a1f35' } }, axisLabel: { color: '#666', fontSize: 9 } },
      { type: 'value', show: false } // 第二个 Y 轴用于较小的数据量级
    ],
    series: [
      // 页面浏览量趋势（总计约 26471）
      { name: '页面浏览', type: 'line', smooth: true, symbol: 'none', data: [2100, 2500, 3100, 3800, 4200, 5800, 4971], lineStyle: { color: '#3b82f6', width: 2 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(59, 130, 246, 0.3)' }, { offset: 1, color: 'rgba(59, 130, 246, 0)' }]) } },
      // 商品访客数趋势（总计 1350）
      { name: '商品访客', type: 'line', yAxisIndex: 1, smooth: true, symbol: 'none', data: [110, 135, 160, 190, 215, 290, 250], lineStyle: { color: '#10b981', width: 2 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(16, 185, 129, 0.2)' }, { offset: 1, color: 'rgba(16, 185, 129, 0)' }]) } }
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