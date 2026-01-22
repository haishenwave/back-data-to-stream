<script setup>
// 数据模拟：大学生助农直播专场
// 特征：低客单价、高转化率、高互动、私域流量占比高

const row1 = [
  { title: '直播成交总额 (GMV)', value: '15.6', unit: 'w', sub: '今日目标完成率 120%' },
  { title: '成交订单数', value: '3,248', unit: '', sub: '支付转化率 18.5%' }, // 助农转化率通常较高
  { title: '成交客单价', value: '48.5', unit: '元', sub: '对比昨日 -5%' }, // 农产品单价较低
  { title: '实时在线人数', value: '0', unit: '', sub: '看过 42,590' }, // 直播结束，实时为0
];

const row2 = [
  { title: '累计观看人数', value: '42,590', sub: '粉丝占比 40%' }, // 校友/家长支持多
  { title: '商品点击人数', value: '12,400', sub: '点击率 29.1%' },
  { title: '千次观看成交', value: '3,660', sub: 'GPM 优秀' },
  { title: '广告消耗', value: '200', sub: 'ROI 78.0' }, // 学生几乎不投流，全是自然量
  { title: '小风车点击', value: '2,880', sub: '转化率 6.7%' },
];

const row3 = [
  { title: '涨粉量', value: '2,880', sub: '关注率 6.7%' },
  { title: '退款率', value: '0.05', sub: '售后平稳' }, // 助农项目退款极少
  { title: '点赞率', value: '6.55', sub: '点赞 28w' }, // 互动极高
  { title: '评论率', value: '35.6', sub: '评论 1.5w' },
  { title: '互动率', value: '42.1', sub: '互动人数 1.8w' },
];
</script>

<template>
  <div class="w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-2xl relative overflow-hidden">
    <div class="absolute top-0 right-0 p-3 bg-black/20 hover:bg-black/40 rounded-bl-2xl transition-colors cursor-pointer group z-10">
      <svg class="w-5 h-5 text-white/60 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-10 mt-2">
      <div v-for="item in row1" :key="item.title" class="flex flex-col items-center">
        <div class="text-[11px] text-blue-100/80 mb-3 flex items-center">
          {{ item.title }}
          <span class="ml-1 border border-white/30 rounded-full w-3 h-3 flex items-center justify-center text-[9px] opacity-60 flex-shrink-0 font-normal">?</span>
        </div>
        <div class="flex items-baseline mb-2">
          <span class="text-4xl font-bold font-mono tracking-tight">{{ item.value }}</span>
          <span class="text-xs ml-1 opacity-80">{{ item.unit }}</span>
        </div>
        <div class="bg-white/10 px-3 py-1 rounded-sm text-[10px] text-blue-50/90 tabular-nums">
          {{ item.sub }}
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="grid grid-cols-5 gap-2 mb-8 border-t border-white/10 pt-6">
        <div v-for="item in row2" :key="item.title" class="flex flex-col items-center">
          <div class="text-[10px] text-blue-100/70 mb-2 flex items-center">
            {{ item.title }}
            <span class="ml-1 border border-white/30 rounded-full w-2.5 h-2.5 flex items-center justify-center text-[8px] opacity-50 flex-shrink-0 font-normal">?</span>
          </div>
          <div class="flex items-baseline mb-1">
            <span class="text-2xl font-bold font-mono">{{ item.value }}</span>
            <span v-if="item.unit" class="text-[10px] ml-0.5 opacity-70">{{ item.unit }}</span>
          </div>
          <div class="text-[9px] text-blue-200/60 bg-white/5 px-2 py-0.5 rounded">{{ item.sub }}</div>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-2">
        <div v-for="item in row3" :key="item.title" class="flex flex-col items-center">
          <div class="text-[10px] text-blue-100/70 mb-2 flex items-center">
            {{ item.title }}
            <span class="ml-1 border border-white/30 rounded-full w-2.5 h-2.5 flex items-center justify-center text-[8px] opacity-50 flex-shrink-0 font-normal">?</span>
          </div>
          <div class="flex items-baseline mb-1">
            <span class="text-2xl font-bold font-mono">{{ item.value }}</span>
            <span class="text-[10px] ml-0.5 opacity-70">%</span>
          </div>
          <div class="text-[9px] text-blue-200/60 bg-white/5 px-2 py-0.5 rounded">{{ item.sub }}</div>
        </div>
      </div>
      <div class="absolute -right-2 top-[50%] -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 z-10">
        <span class="text-white/60 text-lg leading-none">›</span>
      </div>
    </div>
  </div>
</template>