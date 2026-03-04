<script setup>
// 全新推演的真实单场数据 (基于周报 1.86w GMV 拆分的合理高光单场)
// 字段命名保持 B 端通用中台的客观性

const row1 = [
  {
    title: '本场交易总额 (GMV)',
    value: '7,560',
    unit: '元',
    sub: '占本周总额 40%',
    desc: '本场直播期间拍下订单的总金额（包含未支付和退款订单）。'
  },
  {
    title: '成交订单数',
    value: '395',
    unit: '件',
    sub: '目标达成 115%',
    desc: '本场直播成功售出的商品总件数。'
  },
  {
    title: '成交转化率',
    value: '45.19',
    unit: '%',
    sub: '高意向流量',
    desc: '成交人数 / 独立访客数。反映本次直播流量的精准度与极强的购买意愿。'
  },
  {
    title: '平均客单价',
    value: '19.14',
    unit: '元',
    sub: '客均消费水平',
    desc: '平均每笔成交订单的金额 (GMV 7560 / 交易件数 395)。'
  },
];

const row2 = [
  {
    title: '累计场观人数',
    value: '1.25',
    unit: 'w',
    sub: '流量池规模',
    desc: '本场直播期间进入直播间的累计人次 (PV)。'
  },
  {
    title: '最高同时在线',
    value: '185',
    unit: '人',
    sub: '峰值出现在 20:15',
    desc: '本场直播同时停留在直播间的最高人数 (PCU)。'
  },
  {
    title: '平均停留时长',
    value: '2m45s',
    unit: '',
    sub: '留存指标优异',
    desc: '所有进入直播间的观众，平均停留观看的时间。'
  },
  {
    title: '商品独立访客',
    value: '874',
    unit: '人',
    sub: '商品点击率 7.0%',
    desc: '直播间内点击查看商品详情的去重独立访客数 (UV)。'
  },
  {
    title: '千次观看成交',
    value: '604',
    unit: '元',
    sub: '商业变现效率',
    desc: 'GPM：平均每1000次观看带来的成交金额 (7560 / 12.5)。'
  },
];

const row3 = [
  {
    title: '商业广告消耗',
    value: '0',
    unit: '元',
    sub: '全自然/私域流量',
    desc: '本场直播投放千川、DOU+ 等商业化工具的累计消耗金额。'
  },
  {
    title: '退款率',
    value: '0.00',
    unit: '%',
    sub: '当前零退款',
    desc: '申请退款的订单数 / 总成交订单数。'
  },
  {
    title: '本场新增关注',
    value: '210',
    unit: '人',
    sub: '转粉率 1.6%',
    desc: '本场直播期间新增的账号关注用户数。'
  },
  {
    title: '分享裂变次数',
    value: '450',
    unit: '次',
    sub: '强社交传播',
    desc: '观众将直播间分享给他人或微信群的总次数。'
  },
  {
    title: '组件点击互动',
    value: '280',
    unit: '次',
    sub: '沉淀私域资产',
    desc: '直播间互动组件（如加群小风车、预约）的点击总次数。'
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
          <span v-if="item.unit" class="text-xs ml-1 opacity-80">{{ item.unit }}</span>
        </div>
        <div class="bg-white/10 px-3 py-1 rounded-sm text-[10px] text-blue-50/90 tabular-nums whitespace-nowrap">
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
          <div class="text-[9px] text-blue-200/60 bg-white/5 px-2 py-0.5 rounded whitespace-nowrap">{{ item.sub }}</div>
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
            <span v-if="item.unit" class="text-[10px] ml-0.5 opacity-70">{{ item.unit }}</span>
          </div>
          <div class="text-[9px] text-blue-200/60 bg-white/5 px-2 py-0.5 rounded whitespace-nowrap">{{ item.sub }}</div>
        </div>
      </div>
    </div>
  </div>
</template>