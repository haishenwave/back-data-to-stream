<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-xs font-medium text-gray-200">流量趋势</h3>
      <div class="flex items-center space-x-3 text-[10px]">
        <div class="flex items-center">
          <span class="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
          <span class="text-gray-400">自然流量</span>
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span>
          <span class="text-gray-400">付费流量</span>
        </div>
      </div>
    </div>

    <div class="flex-1 w-full" ref="trendChartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const trendChartRef = ref(null);
let myChart = null;

onMounted(() => {
  myChart = echarts.init(trendChartRef.value);

  const option = {
    grid: { top: '10%', left: '10%', right: '5%', bottom: '15%' },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['19:54', '20:05', '20:16', '20:27', '20:38', '20:49'],
      axisLabel: { color: '#666', fontSize: 10 },
      axisLine: { lineStyle: { color: '#2d3748' } }
    },
    yAxis: {
      type: 'value',
      max: 1000,
      splitLine: { lineStyle: { color: '#1a1f35' } },
      axisLabel: { color: '#666', fontSize: 10 }
    },
    series: [
      {
        name: '自然流量',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: [650, 800, 720, 850, 780, 700],
        lineStyle: { color: '#3b82f6', width: 2 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
            { offset: 1, color: 'rgba(59, 130, 246, 0)' }
          ])
        }
      },
      {
        name: '付费流量',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: [0, 0, 0, 0, 0, 0], // 数据保持为 0
        lineStyle: { color: '#10b981', width: 2 }, // 修改点：折线颜色改为绿色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(16, 185, 129, 0.2)' }, // 阴影同步改为绿色调
            { offset: 1, color: 'rgba(16, 185, 129, 0)' }
          ])
        }
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', () => myChart?.resize());
});

onUnmounted(() => {
  window.removeEventListener('resize', () => myChart?.resize());
});
</script>