<template>
  <div class="w-full h-full flex flex-col overflow-hidden">
    <div class="flex justify-between items-center mb-4 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">本场商品销售排行</h3>
      <span class="text-[10px] text-blue-400 cursor-pointer hover:text-blue-300">全部 ›</span>
    </div>
    <div class="grid grid-cols-12 gap-1 pb-3 border-b border-white/5 text-[9px] text-gray-500 font-bold uppercase tracking-wider flex-shrink-0">
      <div class="col-span-1 pl-1">#</div><div class="col-span-6">商品名称</div><div class="col-span-2 text-right">销量</div><div class="col-span-3 text-right pr-1">总金额</div>
    </div>
    <div class="flex-1 overflow-y-auto mt-5 space-y-6 custom-scrollbar min-h-0">
      <div v-for="(prod, index) in products" :key="index" class="grid grid-cols-12 gap-1 items-center group py-3 px-2 rounded text-[11px] min-w-0 hover:bg-white/5 transition-colors">
        <div class="col-span-1 pl-1 font-mono text-gray-500">
          <span :class="index === 0 ? 'text-yellow-500 font-black text-sm' : index === 1 ? 'text-gray-300 font-bold text-sm' : index === 2 ? 'text-orange-400 font-bold text-sm' : ''">{{ index + 1 }}</span>
        </div>
        <div class="col-span-6 min-w-0 flex items-center pr-2">
          <span class="truncate block tracking-wide"
                :class="index === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 font-bold text-[12px]' : index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 font-bold text-[12px]' : index === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 font-bold text-[12px]' : 'text-gray-300'">
            {{ prod.name }}
          </span>
          <span v-if="index < 3" class="ml-1 text-[11px] drop-shadow-md">🔥</span>
        </div>
        <div class="col-span-2 text-right"><p class="text-emerald-400 font-mono tracking-tighter">{{ prod.sales }}</p></div>
        <div class="col-span-3 text-right pr-1"><p class="text-white font-mono tracking-tighter whitespace-nowrap">{{ prod.amount }}</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { userStore } from '@/store/user.js';

const products = computed(() => userStore.currentAccount.dashboardData.productRanking);
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 2px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
</style>