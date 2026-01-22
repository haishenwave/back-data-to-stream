<template>
  <div class="w-full h-full flex flex-col">
    <h3 class="text-xs font-medium text-gray-200 mb-2">流量转化</h3>

    <div class="flex-1 flex items-center justify-center">
      <svg viewBox="0 0 400 280" class="w-full h-auto max-h-full">
        <defs>
          <linearGradient id="funnel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
          </linearGradient>
        </defs>

        <g>
          <polygon points="20,10 280,10 265,65 35,65" fill="url(#funnel-grad)" />
          <text x="150" y="32" text-anchor="middle" fill="white" class="text-[12px] font-bold">114,747</text>
          <text x="150" y="52" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">曝光人数</text>
        </g>

        <g>
          <path d="M 285 45 L 305 65 L 285 85" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
          <text x="315" y="70" text-anchor="start" fill="#f59e0b" class="text-[11px] font-mono font-bold">32.88%</text>
        </g>

        <g>
          <polygon points="40,75 260,75 245,130 55,130" fill="rgba(59, 130, 246, 0.6)" />
          <text x="150" y="97" text-anchor="middle" fill="white" class="text-[12px] font-bold">37,728</text>
          <text x="150" y="117" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">进入人数</text>
        </g>

        <g>
          <path d="M 265 110 L 285 130 L 265 150" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
          <text x="295" y="135" text-anchor="start" fill="#f59e0b" class="text-[11px] font-mono font-bold">3.45%</text>
        </g>

        <g>
          <polygon points="60,140 240,140 225,195 75,195" fill="rgba(59, 130, 246, 0.4)" />
          <text x="150" y="162" text-anchor="middle" fill="white" class="text-[12px] font-bold">1,302</text>
          <text x="150" y="182" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">点击人数</text>
        </g>

        <g>
          <path d="M 245 175 L 265 195 L 245 215" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" />
          <text x="275" y="200" text-anchor="start" fill="#3b82f6" class="text-[11px] font-mono font-bold">35.48%</text>
        </g>

        <g>
          <polygon points="80,205 220,205 210,260 90,260" fill="rgba(59, 130, 246, 0.2)" />
          <text x="150" y="227" text-anchor="middle" fill="white" class="text-[12px] font-bold">462</text>
          <text x="150" y="247" text-anchor="middle" fill="rgba(255,255,255,0.6)" class="text-[9px]">线索人数</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* 确保文字不会因为 SVG 缩放而模糊 */
text {
  user-select: none;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
}
</style>