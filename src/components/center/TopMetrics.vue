<script setup>
// 数据值依然采用真实周报数据 (GMV 1.86w, 订单 980, 访客 1350)
// 但指标定义和副标题恢复为通用 SaaS 标准文案

const row1 = [
  {
    title: '本周交易总额 (GMV)',
    value: '1.86',
    unit: 'w',
    sub: '较前7日 +12.5%',
    desc: '本统计周期内拍下订单的总金额（包含未支付和退款订单）。'
  },
  {
    title: '本周交易件数',
    value: '980',
    unit: '件',
    sub: '较前7日 +32.0%',
    desc: '本统计周期内成功售出的商品总件数。'
  },
  {
    title: '周期转化率',
    value: '46.37',
    unit: '%',
    sub: '较前7日 +15.62%',
    desc: '成交转化效率：成交人数 / 独立访客数。该指标反映流量的精准度与购买意愿。'
  },
  {
    title: '平均客单价',
    value: '19.03',
    unit: '元',
    sub: '客均消费水平',
    desc: '平均每笔成交订单的金额 (GMV / 交易件数)，反映用户消费深度。'
  },
];

const row2 = [
  {
    title: '周期商品曝光',
    value: '10.8',
    unit: 'w',
    sub: '较前7日 +31.7%',
    desc: '本周期内商品在各渠道被展示的总次数。'
  },
  {
    title: '商品点击率',
    value: '28.0',
    unit: '%',
    sub: '较前7日 +31.0%',
    desc: '商品详情页点击次数 / 商品曝光次数，衡量商品吸引力。'
  },
  {
    title: '页面浏览次数',
    value: '26,471',
    unit: '次',
    sub: '较前7日 +26.0%',
    desc: '本周期内活动相关页面的累计被访问次数 (PV)。'
  },
  {
    title: '商品独立访客',
    value: '1,350',
    unit: '人',
    sub: '较前7日 +46.32%',
    desc: '本周期内访问商品详情页的去重独立访客数 (UV)。'
  },
  {
    title: '千次浏览成交',
    value: '704',
    unit: '元',
    sub: '流量变现效率',
    desc: 'GPM：平均每1000次页面浏览带来的成交金额，核心商业化指标。'
  },
];

const row3 = [
  {
    title: '广告消耗',
    value: '0',
    unit: '元',
    sub: '全自然流量供给',
    desc: '本周期内商业化投流工具（如千川、DOU+）的累计消耗金额。'
  },
  {
    title: '退款率',
    value: '0.05',
    unit: '%',
    sub: '售后指标平稳',
    desc: '申请退款的订单数 / 总成交订单数。反映商品履约与客情质量。'
  },
  {
    title: '新增粉丝量',
    value: '850',
    unit: '人',
    sub: '流量留存转化',
    desc: '本周期内通过各渠道新增的账号关注用户数。'
  },
  {
    title: '分享裂变率',
    value: '15.6',
    unit: '%',
    sub: '社交传播指数',
    desc: '访客中触发分享动作（转发至群聊/朋友圈）的用户占比。'
  },
  {
    title: '专属社群引流',
    value: '420',
    unit: '人',
    sub: '沉淀私域资产',
    desc: '本周期内通过页面组件成功引导加入专属私域社群的人数。'
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