<template>
  <div class="w-full h-screen bg-[#0b0f19] flex overflow-auto min-w-[1024px] min-h-[600px] text-gray-300 font-sans">

    <aside class="w-64 bg-[#111625] border-r border-white/5 flex flex-col flex-shrink-0 sticky top-0 h-screen z-10">
      <div class="h-16 flex items-center px-6 border-b border-white/5 flex-shrink-0">
        <img src="/favicon.svg" alt="Logo" class="w-8 h-8 mr-3" />
        <span class="font-bold text-white tracking-wide">跃播台</span>
      </div>

      <nav class="flex-1 px-3 py-6 space-y-1 overflow-y-auto custom-scrollbar">
        <div class="px-3 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">主要功能</div>
        <a href="#" class="flex items-center px-3 py-2.5 bg-blue-600/10 text-blue-400 rounded-md">
          <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <span class="font-medium">工作台</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"><svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span>历史直播分析</span></a>
        <a href="#" class="flex items-center px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"><svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg><span>商品库存管理</span></a>

        <div class="px-3 mt-6 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">系统设置</div>
        <a href="#" class="flex items-center px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"><svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span>账号与权限</span></a>
      </nav>

      <div class="p-4 border-t border-white/5 flex-shrink-0">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 text-xs font-bold">{{ profile.name.slice(0, 2) }}</div>
          <div class="ml-3">
            <p class="text-xs font-medium text-white">{{ profile.name }}</p>
            <p class="text-[10px] text-gray-500">{{ profile.role }}</p>
          </div>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col bg-[#0b0f19] min-w-0">
      <header class="h-16 flex items-center justify-between px-8 bg-[#0b0f19] border-b border-white/5 flex-shrink-0 sticky top-0 z-10">
        <h2 class="text-lg font-medium text-white">工作台概览</h2>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
            <input type="text" placeholder="搜索直播场次..." class="bg-[#161b2c] border border-gray-700 text-xs text-white rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-blue-500 w-64 transition-all focus:w-72">
          </div>
          <button class="text-gray-400 hover:text-white relative"><span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg></button>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div v-for="(card, i) in stats" :key="i" class="bg-[#161b2c] p-5 rounded-lg border border-white/5 shadow-sm">
            <div class="flex justify-between items-start mb-1">
              <p class="text-xs text-gray-500">{{ card.title }}</p>

            </div>
            <div class="flex items-baseline space-x-2 mt-1">
              <span class="text-2xl font-bold text-white font-mono">{{ card.value }}</span>
              <span class="text-xs" :class="card.trend > 0 ? 'text-green-500' : 'text-red-500'">{{ card.trend > 0 ? '+' : '' }}{{ card.trend }}%</span>
            </div>
          </div>
        </div>

        <div class="bg-[#161b2c] rounded-lg border border-white/5 overflow-hidden flex flex-col">
          <div class="px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <h3 class="text-sm font-bold text-white">直播场次归档</h3>
            <div class="flex items-center space-x-3">
              <div class="relative">
                <select class="appearance-none bg-[#0b0f19] border border-white/5 text-gray-400 text-xs rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer hover:text-gray-300 transition-colors">
                  <option>全部时间段</option><option>本月 (3月)</option><option>上月 (2月)</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
              </div>
            </div>
          </div>

          <table class="w-full text-left text-xs">
            <thead class="bg-[#111625] text-gray-500">
            <tr>
              <th class="px-6 py-3 font-medium">直播主题</th>
              <th class="px-6 py-3 font-medium">开播时间</th>
              <th class="px-6 py-3 font-medium text-right">GMV (元)</th>
              <th class="px-6 py-3 font-medium text-right">订单数</th>
              <th class="px-6 py-3 font-medium text-center">状态</th>
              <th class="px-6 py-3 font-medium text-center">操作</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
            <tr v-for="item in paginatedRecords" :key="item.id" class="hover:bg-white/5 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center">

                  <span class="text-gray-300 font-medium">{{ item.title }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-400 font-mono">{{ item.date }}</td>
              <td class="px-6 py-4 text-right text-white font-medium font-mono">{{ item.gmv }}</td>
              <td class="px-6 py-4 text-right text-gray-400 font-mono">{{ item.orders }}</td>
              <td class="px-6 py-4 text-center"><span class="bg-gray-800 text-gray-400 border border-gray-700 px-2 py-0.5 rounded-full text-[10px]">{{ item.status }}</span></td>
              <td class="px-6 py-4 text-center">
                <button @click="goToDashboard" class="text-gray-400 hover:text-white border-gray-600 hover:bg-gray-700 px-3 py-1 border rounded transition-all flex items-center justify-center mx-auto" title="在新窗口打开大屏">
                  <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>直播大屏
                </button>
              </td>
            </tr>
            </tbody>
          </table>

          <div class="px-6 py-3 border-t border-white/5 bg-[#0b0f19]/50 flex items-center justify-between">
            <span class="text-xs text-gray-500">显示 {{ (currentPage - 1) * pageSize + 1 }} 到 {{ Math.min(currentPage * pageSize, liveRecords.length) }} 条，共 {{ liveRecords.length }} 条记录</span>
            <div class="flex space-x-1">
              <button @click="prevPage" :disabled="currentPage === 1" class="px-2 py-1 rounded border border-white/10 text-xs text-gray-400 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition">上一页</button>
              <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'border-white/10 text-gray-400 hover:bg-white/5'" class="px-3 py-1 rounded border text-xs transition">{{ page }}</button>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="px-2 py-1 rounded border border-white/10 text-xs text-gray-400 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition">下一页</button>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { userStore } from '@/store/user.js';

const router = useRouter();

const profile = computed(() => userStore.currentAccount.profile);
const stats = computed(() => userStore.currentAccount.homeData.stats);
const liveRecords = computed(() => userStore.currentAccount.homeData.liveRecords);

const currentPage = ref(1);
const pageSize = 5;
const totalPages = computed(() => Math.ceil(liveRecords.value.length / pageSize));
const paginatedRecords = computed(() => liveRecords.value.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize));
const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };

const goToDashboard = () => {
  const routeUrl = router.resolve({ path: '/dashboard' });
  window.open(routeUrl.href, '_blank');
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
</style>