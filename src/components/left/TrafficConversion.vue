<template>
  <div class="w-full h-full flex flex-col relative overflow-hidden">
    <div class="flex justify-between items-center mb-2 flex-shrink-0">
      <h3 class="text-xs font-medium text-gray-200">周期核心转化漏斗</h3>
      <span class="text-[9px] text-blue-400">曝光转化率 46.37%</span>
    </div>

    <div class="flex-1 w-full min-h-0 relative overflow-hidden" ref="chartContainer">
      <svg viewBox="0 0 400 260" class="w-full h-auto max-h-full">
        <defs>
          <linearGradient id="funnel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
          </linearGradient>
        </defs>

        <g>
          <polygon points="20,10 280,10 265,65 35,65" fill="url(#funnel-grad)" />
          <text x="150" y="32" text-anchor="middle" fill="white" class="text-[12px] font-bold">108,320</text>
          <text x="150" y="52" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">商品曝光数</text>
        </g>

        <g>
          <path d="M 285 45 L 305 65 L 285 85" fill="none" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" />
          <text x="315" y="70" text-anchor="start" fill="#94a3b8" class="text-[10px] font-mono">24.44%</text>
        </g>

        <g>
          <polygon points="40,75 260,75 245,130 55,130" fill="rgba(59, 130, 246, 0.6)" />
          <text x="150" y="97" text-anchor="middle" fill="white" class="text-[12px] font-bold">26,471</text>
          <text x="150" y="117" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">页面浏览次数</text>
        </g>

        <g>
          <path d="M 265 110 L 285 130 L 265 150" fill="none" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" />
          <text x="295" y="135" text-anchor="start" fill="#94a3b8" class="text-[10px] font-mono">5.10%</text>
        </g>

        <g>
          <polygon points="60,140 240,140 225,195 75,195" fill="rgba(59, 130, 246, 0.4)" />
          <text x="150" y="162" text-anchor="middle" fill="white" class="text-[12px] font-bold">1,350</text>
          <text x="150" y="182" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">商品独立访客</text>
        </g>

        <g>
          <path d="M 245 175 L 265 195 L 245 215" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
          <text x="275" y="200" text-anchor="start" fill="#f59e0b" class="text-[11px] font-mono font-bold">46.37%</text>
        </g>

        <g>
          <polygon points="80,205 220,205 210,255 90,255" fill="rgba(16, 185, 129, 0.4)" />
          <text x="150" y="222" text-anchor="middle" fill="white" class="text-[12px] font-bold">626</text>
          <text x="150" y="242" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">成交买家人数</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
text {
  user-select: none;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
}
</style>