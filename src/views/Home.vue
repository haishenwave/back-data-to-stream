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

        <a href="#" class="flex items-center px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
          <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <span>历史数据分析</span>
        </a>

        <a href="#" class="flex items-center px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
          <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          <span>商品库存管理</span>
        </a>

        <div class="px-3 mt-6 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">系统设置</div>
        <a href="#" class="flex items-center px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
          <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span>账号与权限</span>
        </a>
      </nav>

      <div class="p-4 border-t border-white/5 flex-shrink-0">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-500 text-xs font-bold">
            JD
          </div>
          <div class="ml-3">
            <p class="text-xs font-medium text-white">助农小分队</p>
            <p class="text-[10px] text-gray-500">旗舰店管理员</p>
          </div>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col bg-[#0b0f19] min-w-0">

      <header class="h-16 flex items-center justify-between px-8 bg-[#0b0f19] border-b border-white/5 flex-shrink-0 sticky top-0 z-10">
        <h2 class="text-lg font-medium text-white">工作台概览</h2>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input type="text" placeholder="搜索直播场次..." class="bg-[#161b2c] border border-gray-700 text-xs text-white rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-blue-500 w-64 transition-all focus:w-72">
          </div>
          <button class="text-gray-400 hover:text-white relative">
            <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-8">

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div v-for="(card, i) in stats" :key="i" class="bg-[#161b2c] p-5 rounded-lg border border-white/5 shadow-sm">
            <p class="text-xs text-gray-500 mb-1">{{ card.title }}</p>
            <div class="flex items-baseline space-x-2">
              <span class="text-2xl font-bold text-white">{{ card.value }}</span>
              <span class="text-xs" :class="card.trend > 0 ? 'text-green-500' : 'text-red-500'">
                {{ card.trend > 0 ? '+' : '' }}{{ card.trend }}%
              </span>
            </div>
          </div>
        </div>

        <div class="bg-[#161b2c] rounded-lg border border-white/5 overflow-hidden">
          <div class="px-6 py-4 border-b border-white/5 flex justify-between items-center">
            <h3 class="text-sm font-bold text-white">最近直播场次 (3)</h3>
            <button class="text-xs text-blue-400 hover:text-blue-300">查看全部</button>
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
            <tr v-for="item in liveRecords" :key="item.id" class="hover:bg-white/5 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded bg-gray-700 flex-shrink-0 mr-3 overflow-hidden">
                    <div class="w-full h-full bg-blue-500/20 flex items-center justify-center text-[8px] text-blue-300">COVER</div>
                  </div>
                  <span class="text-gray-200 font-medium">{{ item.title }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-400 font-mono">{{ item.date }}</td>
              <td class="px-6 py-4 text-right text-white font-medium">{{ item.gmv }}</td>
              <td class="px-6 py-4 text-right text-gray-400">{{ item.orders }}</td>
              <td class="px-6 py-4 text-center">
                <span class="px-2 py-0.5 rounded-full text-[10px] bg-gray-700 text-gray-300">已结束</span>
              </td>
              <td class="px-6 py-4 text-center">
                <button
                    @click="goToDashboard"
                    class="text-blue-400 hover:text-white px-3 py-1 border border-blue-500/30 rounded hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center mx-auto"
                    title="在新窗口打开大屏"
                >
                  <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  数据复盘
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const stats = [
  { title: '本月累计 GMV', value: '45.2w', trend: 12.5 },
  { title: '累计成交订单', value: '9,240', trend: 8.4 },
  { title: '平均客单价', value: '48.9', trend: -2.1 },
  { title: '新增粉丝', value: '5,100', trend: 15.3 },
];

const liveRecords = [
  { id: 1, title: '青春助农：密云板栗南瓜专场', date: '2026-01-22 18:00', gmv: '156,000', orders: '3,248' },
  { id: 2, title: '周末福利：助农蔬菜大礼包', date: '2026-01-20 19:30', gmv: '89,400', orders: '1,850' },
  { id: 3, title: '新春特辑：手工红薯粉条', date: '2026-01-15 18:00', gmv: '65,200', orders: '2,100' },
];

const goToDashboard = () => {
  const routeUrl = router.resolve({ path: '/dashboard' });
  window.open(routeUrl.href, '_blank');
};
</script>

<style scoped>
/* 简单的滚动条美化 */
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
</style>