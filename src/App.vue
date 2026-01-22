<template>
  <div class="w-full h-screen bg-dashboard-bg text-white flex flex-col font-sans select-none overflow-hidden pt-[5vh] pb-[3vh] px-[6vw]">

    <div class="w-full mb-2">
      <TopHeader />
    </div>

    <main class="flex-1 grid grid-cols-12 gap-6 w-full overflow-hidden">

      <div class="col-span-3 h-full overflow-hidden">
        <LeftPanel />
      </div>

      <div class="col-span-6 h-full overflow-hidden">
        <CenterPanel />
      </div>

      <div class="col-span-3 h-full overflow-hidden">
        <RightPanel />
      </div>

    </main>
  </div>
</template>

<script setup>
import TopHeader from './components/TopHeader.vue'
import LeftPanel from './components/LeftPanel.vue'
import CenterPanel from './components/CenterPanel.vue'
import RightPanel from './components/RightPanel.vue'
</script>

<style>
/* 确保没有任何默认的 margin 干扰计算 */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0d1d;
  overflow: hidden; /* 严禁出现滚动条 */
}

#app {
  width: 100%;
  height: 100%;
}
</style>