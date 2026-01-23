<script setup>
// 数据模拟：大学生助农直播专场
// 核心优化：为每个指标增加了 desc (定义解释)，用于 Tooltip 展示

const row1 = [
  {
    title: '直播成交总额 (GMV)',
    value: '15.6',
    unit: 'w',
    sub: '今日目标完成率 120%',
    desc: '统计周期内拍下订单的总金额（包含未支付和退款订单）。'
  },
  {
    title: '成交订单数',
    value: '3,248',
    unit: '',
    sub: '支付转化率 18.5%',
    desc: '统计周期内用户成功付款的订单总数。'
  },
  {
    title: '成交客单价',
    value: '48.5',
    unit: '元',
    sub: '对比昨日 -5%',
    desc: '平均每笔成交订单的金额 (GMV / 成交订单数)。'
  },
  {
    title: '实时在线人数',
    value: '0',
    unit: '',
    sub: '看过 42,590',
    desc: '当前时刻停留在直播间的去重用户数（直播已结束）。'
  },
];

const row2 = [
  {
    title: '累计观看人数',
    value: '42,590',
    sub: '粉丝占比 40%',
    desc: '直播期间进入直播间的累计去重人次 (PV)。'
  },
  {
    title: '商品点击人数',
    value: '12,400',
    sub: '点击率 29.1%',
    desc: '直播间内点击商品详情页的去重用户数。'
  },
  {
    title: '千次观看成交',
    value: '3,660',
    sub: 'GPM 优秀',
    desc: 'GPM：平均每1000次观看带来的成交金额，衡量变现效率的核心指标。'
  },
  {
    title: '广告消耗',
    value: '200',
    sub: 'ROI 78.0',
    desc: '投放DOU+及巨量千川的累计消耗金额。'
  },
  {
    title: '小风车点击',
    value: '2,880',
    sub: '转化率 6.7%',
    desc: '直播间互动组件（如预约/加群）的点击次数。'
  },
];

const row3 = [
  {
    title: '涨粉量',
    value: '2,880',
    sub: '关注率 6.7%',
    desc: '直播期间新增关注的用户数。'
  },
  {
    title: '退款率',
    value: '0.05',
    sub: '售后平稳',
    desc: '申请退款的订单数 / 总成交订单数。'
  },
  {
    title: '点赞率',
    value: '6.55',
    sub: '点赞 28w',
    desc: '平均每百次观看的点赞次数，体现互动热度。'
  },
  {
    title: '评论率',
    value: '35.6',
    sub: '评论 1.5w',
    desc: '平均每百次观看的评论条数。'
  },
  {
    title: '互动率',
    value: '42.1',
    sub: '互动人数 1.8w',
    desc: '产生互动行为（评论/点赞/分享）的用户占比。'
  },
];
</script>

<template>
  <div class="w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-2xl relative z-20">

    <div class="absolute top-0 right-0 p-3 bg-black/20 rounded-bl-2xl rounded-tr-xl z-10">
      <svg class="w-5 h-5 text-white/60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-10 mt-2">
      <div v-for="item in row1" :key="item.title" class="flex flex-col items-center">

        <div class="text-[11px] text-blue-100/80 mb-3 flex items-center relative group cursor-help">
          {{ item.title }}
          <span class="ml-1 border border-white/30 rounded-full w-3 h-3 flex items-center justify-center text-[9px] opacity-60">?</span>

          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-48 p-3 bg-gray-900/95 backdrop-blur-sm border border-blue-500/30 text-white text-[10px] rounded shadow-2xl z-50 pointer-events-none transition-opacity">
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900/95"></div>
            <p class="leading-relaxed opacity-90 text-left">
              <span class="font-bold text-blue-400 block mb-1">指标定义：</span>
              {{ item.desc }}
            </p>
          </div>
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
          <div class="text-[10px] text-blue-100/70 mb-2 flex items-center relative group cursor-help">
            {{ item.title }}
            <span class="ml-1 border border-white/30 rounded-full w-2.5 h-2.5 flex items-center justify-center text-[8px] opacity-50 flex-shrink-0 font-normal">?</span>
            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-40 p-2 bg-gray-900/95 backdrop-blur-sm border border-blue-500/30 text-white text-[10px] rounded shadow-xl z-50 pointer-events-none">
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900/95"></div>
              <p class="leading-tight text-left">{{ item.desc }}</p>
            </div>
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
          <div class="text-[10px] text-blue-100/70 mb-2 flex items-center relative group cursor-help">
            {{ item.title }}
            <span class="ml-1 border border-white/30 rounded-full w-2.5 h-2.5 flex items-center justify-center text-[8px] opacity-50 flex-shrink-0 font-normal">?</span>
            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-40 p-2 bg-gray-900/95 backdrop-blur-sm border border-blue-500/30 text-white text-[10px] rounded shadow-xl z-50 pointer-events-none">
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900/95"></div>
              <p class="leading-tight text-left">{{ item.desc }}</p>
            </div>
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