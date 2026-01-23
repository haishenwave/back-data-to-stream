<template>
  <div class="w-full h-full flex flex-col overflow-hidden">
    <div class="flex justify-between items-center mb-4 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">商品销售排行</h3>
      <span class="text-[10px] text-blue-400 cursor-pointer hover:text-blue-300">全部 ›</span>
    </div>

    <div class="grid grid-cols-12 gap-1 pb-2 border-b border-white/5 text-[9px] text-gray-500 font-bold uppercase tracking-wider flex-shrink-0">
      <div class="col-span-1 pl-1">#</div>
      <div class="col-span-2">商品</div>
      <div class="col-span-4">名称</div>
      <div class="col-span-2 text-right">件数</div>
      <div class="col-span-3 text-right pr-1">金额</div>
    </div>

    <div class="flex-1 overflow-y-auto mt-4 space-y-4 custom-scrollbar min-h-0">
      <div v-for="(prod, index) in products" :key="index"
           class="grid grid-cols-12 gap-1 items-center group p-1 rounded text-[10px] min-w-0 hover:bg-white/5 transition-colors">

        <div class="col-span-1 pl-1 font-mono text-gray-500">
          <span :class="index < 3 ? 'text-blue-400 font-bold' : ''">{{ index + 1 }}</span>
        </div>

        <div class="col-span-2 flex-shrink-0 relative">
          <div class="w-8 h-8 rounded-sm overflow-hidden flex items-center justify-center"
               :class="[index === 0 ? 'bg-orange-500/20 text-orange-500' : index === 1 ? 'bg-gray-500/20 text-gray-400' : 'bg-blue-500/10 text-blue-500']">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </div>
          <div v-if="index < 3" class="absolute -top-1 -left-1 px-1 rounded-[2px] text-[6px] font-bold text-white scale-75 origin-top-left"
               :class="index === 0 ? 'bg-red-500' : index === 1 ? 'bg-orange-500' : 'bg-yellow-500'">HOT</div>
        </div>

        <div class="col-span-4 min-w-0">
          <p class="text-gray-300 truncate whitespace-nowrap overflow-hidden block" :title="prod.name">{{ prod.name }}</p>
        </div>
        <div class="col-span-2 text-right">
          <p class="text-emerald-400 font-mono tracking-tighter">{{ prod.sales }}</p>
        </div>
        <div class="col-span-3 text-right pr-1">
          <p class="text-white font-mono tracking-tighter whitespace-nowrap">¥{{ prod.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  { name: '【助农】密云板栗南瓜 5斤装', sales: '1,582', amount: '4.7w' },
  { name: '现摘普罗旺斯沙瓤西红柿', sales: '1,120', amount: '3.9w' },
  { name: '农家散养土鸡蛋 30枚装', sales: '850', amount: '3.3w' },
  { name: '爱心助农蔬菜大礼包(6种)', sales: '420', amount: '2.5w' },
  { name: '纯手工红薯粉条 无添加', sales: '310', amount: '0.9w' },
];
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 2px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
</style>