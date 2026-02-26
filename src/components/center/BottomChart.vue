<template>
  <div class="w-full h-full flex flex-col overflow-hidden relative">
    <div class="flex justify-between items-center mb-4 flex-shrink-0">
      <div class="flex items-center space-x-4">
        <h3 class="text-xs font-medium text-gray-200">近7日综合趋势</h3>
        <div class="flex space-x-2">
          <span class="flex items-center text-[10px] text-gray-400">
            <span class="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> 每日 GMV
          </span>
          <span class="flex items-center text-[10px] text-gray-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> 每日订单
          </span>
        </div>
      </div>

      <div class="flex bg-white/5 p-0.5 rounded-sm border border-white/10">
        <button v-for="t in ['按日', '按周']" :key="t"
                class="px-3 py-0.5 text-[10px] rounded-sm transition-colors"
                :class="activeTime === t ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200'">
          {{ t }}
        </button>
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

const chartContainer = ref(null);
const chartRef = ref(null);
const activeTime = ref('按日');
let myChart = null;
let resizeObserver = null;

onMounted(() => {
  myChart = echarts.init(chartRef.value);

  const option = {
    grid: { top: '15%', left: '2%', right: '2%', bottom: '5%', containLabel: true },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(16, 27, 54, 0.9)',
      borderColor: '#2563eb',
      textStyle: { color: '#fff' }
    },
    // X轴改为近7日日期
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['06.15', '06.16', '06.17', '06.18', '06.19', '06.20', '06.21'],
      axisLabel: { color: '#64748b', fontSize: 10 },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    yAxis: [
      {
        type: 'value',
        name: 'GMV (元)',
        nameTextStyle: { color: '#64748b', fontSize: 9 },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#64748b', fontSize: 10 }
      },
      {
        type: 'value',
        name: '订单 (件)',
        nameTextStyle: { color: '#64748b', fontSize: 9 },
        splitLine: { show: false },
        axisLabel: { color: '#64748b', fontSize: 10 }
      }
    ],
    series: [
      {
        name: '每日 GMV',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        itemStyle: { color: '#3b82f6' },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(59, 130, 246, 0.4)' }, { offset: 1, color: 'rgba(59, 130, 246, 0)' }]) },
        // 每日 GMV，7天总和 = 18652.3
        data: [2100, 2450.5, 2800, 3120, 2450.8, 3200, 2531]
      },
      {
        name: '每日订单',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: '25%',
        itemStyle: { color: 'rgba(16, 185, 129, 0.3)', borderRadius: [4, 4, 0, 0] },
        // 每日订单，7天总和 = 980
        data: [110, 128, 147, 164, 129, 168, 134]
      }
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