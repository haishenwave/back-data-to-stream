<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xs font-medium text-gray-200">观看用户画像</h3>
      <span class="text-[10px] text-gray-500 italic">人群洞察</span>
    </div>
    <div class="flex-1 w-full" ref="ageChartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const ageChartRef = ref(null);

onMounted(() => {
  const myChart = echarts.init(ageChartRef.value);
  myChart.setOption({
    grid: { left: '3%', right: '10%', bottom: '3%', top: '5%', containLabel: true },
    xAxis: { type: 'value', show: false },
    yAxis: {
      type: 'category',
      data: ['18-23岁', '24-30岁', '31-40岁', '41-50岁', '50岁以上'],
      axisLabel: { color: '#94a3b8', fontSize: 10 },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: [10, 25, 45, 30, 15],
      barWidth: '50%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#3b82f6' },
          { offset: 1, color: 'rgba(59, 130, 246, 0.1)' }
        ]),
        borderRadius: [0, 10, 10, 0]
      },
      label: { show: true, position: 'right', color: '#fff', fontSize: 10, formatter: '{c}%' }
    }]
  });
});
</script>