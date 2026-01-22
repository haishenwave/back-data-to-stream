<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-4">
        <h3 class="text-xs font-medium text-gray-200">综合趋势</h3>
        <div class="flex space-x-2">
          <span class="flex items-center text-[10px] text-gray-400">
            <span class="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> 成交额 (GMV)
          </span>
          <span class="flex items-center text-[10px] text-gray-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> 订单量
          </span>
        </div>
      </div>

      <div class="flex bg-white/5 p-0.5 rounded-sm border border-white/10">
        <button v-for="t in ['1分钟', '5分钟', '1小时', '7天']" :key="t"
                class="px-3 py-1 text-[10px] rounded-sm transition-colors"
                :class="t === '1分钟' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200'">
          {{ t }}
        </button>
      </div>
    </div>

    <div class="flex-1 w-full min-h-0" ref="chartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let myChart = null;

onMounted(() => {
  myChart = echarts.init(chartRef.value);

  const option = {
    grid: {
      top: '15%',
      left: '3%',
      right: '3%',
      bottom: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(16, 27, 54, 0.9)',
      borderColor: '#2563eb',
      textStyle: { color: '#fff' }
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['19:54', '20:05', '20:16', '20:27', '20:38', '20:49'],
      axisLabel: { color: '#64748b', fontSize: 10 },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    yAxis: [
      {
        type: 'value',
        name: '成交额 (w)',
        nameTextStyle: { color: '#64748b', fontSize: 10 },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#64748b', fontSize: 10 }
      },
      {
        type: 'value',
        name: '订单量',
        nameTextStyle: { color: '#64748b', fontSize: 10 },
        splitLine: { show: false },
        axisLabel: { color: '#64748b', fontSize: 10 }
      }
    ],
    series: [
      {
        name: '成交额 (GMV)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: { color: '#3b82f6' },
        lineStyle: { width: 3, color: '#3b82f6' },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(59, 130, 246, 0.4)' },
            { offset: 1, color: 'rgba(59, 130, 246, 0)' }
          ])
        },
        data: [2.5, 5.8, 8.4, 11.2, 13.5, 15.6]
      },
      {
        name: '订单量',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: '20%',
        itemStyle: {
          color: 'rgba(16, 185, 129, 0.3)',
          borderRadius: [4, 4, 0, 0]
        },
        data: [500, 1200, 1800, 2400, 2900, 3248]
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