<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { userStore } from '@/store/user.js';

const chartRef = ref(null);
const chartContainer = ref(null);
let myChart = null;
let resizeObserver = null;

const sourceData = userStore.currentAccount.dashboardData.trafficSource;

onMounted(() => {
  myChart = echarts.init(chartRef.value);
  const option = {
    series: [{
      type: 'pie',
      radius: ['60%', '80%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: { show: false },
      data: sourceData.map(item => ({
        value: item.percent,
        name: item.name,
        itemStyle: { color: item.color }
      }))
    }]
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

<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex justify-between items-center mb-2 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">本场流量渠道占比</h3>

    </div>

    <div class="flex-1 w-full min-h-0 flex items-center relative" ref="chartContainer">
      <div class="w-1/2 h-full" ref="chartRef"></div>

      <div class="w-1/2 pl-2 space-y-2 overflow-y-auto max-h-full">
        <div v-for="item in sourceData" :key="item.name" class="flex flex-col">
          <div class="flex items-center justify-between mb-0.5">
            <div class="flex items-center">
              <span :style="{ backgroundColor: item.color }" class="w-1.5 h-1.5 rounded-full mr-1.5"></span>
              <span class="text-[10px] text-gray-400">{{ item.name }}</span>
            </div>
            <span class="text-[10px] font-bold text-gray-200">{{ item.percent }}%</span>
          </div>
          <div class="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <div :style="{ width: item.percent + '%', backgroundColor: item.color }" class="h-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>