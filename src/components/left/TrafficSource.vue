<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let myChart = null;

// 定义统一颜色变量
const COLORS = {
  natural: '#3b82f6', // 蓝色
  paid: '#10b981',    // 绿色 (修改点)
  other: '#f59e0b'    // 黄色 (修改点)
};

const sourceData = [
  { name: '自然流量', percent: 100, color: COLORS.natural },
  { name: '付费流量', percent: 0, color: COLORS.paid },
  { name: '其他', percent: 0, color: COLORS.other },
];

onMounted(() => {
  myChart = echarts.init(chartRef.value);
  const option = {
    series: [
      {
        type: 'pie',
        radius: ['65%', '85%'],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: { scale: false },
        data: [
          { value: 100, name: '自然流量', itemStyle: { color: COLORS.natural } },
          { value: 0, name: '付费流量', itemStyle: { color: COLORS.paid } },
          { value: 0, name: '其他', itemStyle: { color: COLORS.other } },
        ]
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

<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-sm font-medium text-gray-200">观众流量来源</h3>
      <div class="text-[10px] text-gray-400 cursor-pointer hover:text-blue-400">流量分析</div>
    </div>

    <div class="flex-1 flex items-center">
      <div class="w-1/2 h-full" ref="chartRef"></div>
      <div class="w-1/2 pl-4 space-y-3">
        <div v-for="item in sourceData" :key="item.name" class="flex flex-col">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center">
              <span :style="{ backgroundColor: item.color }" class="w-2 h-2 rounded-full mr-2"></span>
              <span class="text-[11px] text-gray-400">{{ item.name }}</span>
            </div>
            <span class="text-[11px] font-bold text-gray-200">{{ item.percent }}%</span>
          </div>
          <div class="w-full h-[3px] bg-gray-800 rounded-full overflow-hidden">
            <div :style="{ width: item.percent + '%', backgroundColor: item.color }" class="h-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>