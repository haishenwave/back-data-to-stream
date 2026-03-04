<template>
  <div class="w-full h-full flex flex-col overflow-hidden relative">
    <div class="flex justify-between items-center mb-4 flex-shrink-0">
      <div class="flex items-center space-x-4">
        <h3 class="text-xs font-medium text-gray-200">综合成交趋势</h3>
        <div class="flex space-x-2">
          <span class="flex items-center text-[10px] text-gray-400">
            <span class="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> 累计 GMV
          </span>
          <span class="flex items-center text-[10px] text-gray-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> 阶段订单
          </span>
        </div>
      </div>

      <div class="flex bg-white/5 p-0.5 rounded-sm border border-white/10">
        <button v-for="t in ['10分', '30分', '1小时']" :key="t"
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
const activeTime = ref('30分');
let myChart = null;
let resizeObserver = null;

onMounted(() => {
  myChart = echarts.init(chartRef.value);

  const option = {
    grid: { top: '15%', left: '2%', right: '2%', bottom: '5%', containLabel: true },
    tooltip: { trigger: 'axis', backgroundColor: 'rgba(16, 27, 54, 0.9)', borderColor: '#2563eb', textStyle: { color: '#fff' } },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      // 换回更规范的 30分钟 切分（共9个节点）
      data: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
      axisLabel: { color: '#64748b', fontSize: 10 },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    yAxis: [
      { type: 'value', name: 'GMV (元)', nameTextStyle: { color: '#64748b', fontSize: 9 }, splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } }, axisLabel: { color: '#64748b', fontSize: 10 } },
      { type: 'value', name: '订单 (件)', nameTextStyle: { color: '#64748b', fontSize: 9 }, splitLine: { show: false }, axisLabel: { color: '#64748b', fontSize: 10 } }
    ],
    series: [
      {
        name: '累计 GMV',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        itemStyle: { color: '#3b82f6' },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(59, 130, 246, 0.4)' }, { offset: 1, color: 'rgba(59, 130, 246, 0)' }]) },
        // 9个节点增长，最终点完美到达 7560
        data: [285, 960, 2010, 3450, 4980, 6120, 6980, 7360, 7560]
      },
      {
        name: '阶段订单',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: '25%',
        itemStyle: { color: 'rgba(16, 185, 129, 0.3)', borderRadius: [4, 4, 0, 0] },
        // 9个阶段订单，总和刚好 = 395
        data: [15, 35, 55, 75, 80, 60, 45, 20, 10]
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