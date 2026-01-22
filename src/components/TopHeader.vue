<template>
  <div class="w-full h-16 flex items-center justify-between px-6 bg-header-bg/10 relative select-none z-50">

    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

    <div class="flex items-center h-full">

      <div class="flex items-center mr-6">
        <img
            src="/favicon.svg"
            alt="Logo"
            class="w-8 h-8 mr-3 shadow-lg"
        />
        <div>
          <h1 class="text-xl font-bold text-white tracking-wider italic">跃播台</h1>
          <p class="text-[9px] text-blue-300 tracking-[0.2em] opacity-60 font-medium">LEAP STREAM HUB</p>
        </div>
      </div>

      <div class="h-6 w-[1px] bg-white/10 mr-6"></div>

      <div class="flex items-center text-sm text-blue-100/90 bg-blue-500/10 px-3 py-1.5 rounded border border-blue-500/20">
        <svg class="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span class="opacity-70 mr-2 text-xs">主播</span>
        <span class="font-bold tracking-wide">助农小分队</span>
      </div>

    </div>

    <div class="flex items-center h-full">
      <div class="flex flex-col items-end">
        <div class="flex items-center text-xs text-gray-400 mb-1">
          <span class="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
          <span>复盘场次时间</span>
        </div>
        <div class="flex items-center text-lg font-mono font-bold text-white tracking-wide">
          <svg class="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          2026.01.22 <span class="text-blue-500 mx-2">|</span> 18:00 - 22:00
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// 纯静态展示
</script>

<style scoped>
h1, span { font-family: system-ui, -apple-system, sans-serif; }
</style>