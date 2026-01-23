<template>
  <div class="w-full h-screen bg-dashboard-bg text-white flex flex-col font-sans select-none overflow-auto min-w-[1024px] min-h-[600px] pt-[2vh] pb-[2vh] px-[2vw]">

    <div class="w-full mb-4 flex-shrink-0">
      <TopHeader />
    </div>

    <main class="flex-1 grid grid-cols-12 gap-4 w-full min-h-0">

      <div class="col-span-3 flex flex-col h-full min-h-[400px] overflow-hidden">
        <LeftPanel />
      </div>

      <div class="col-span-6 flex flex-col h-full min-h-[400px] overflow-hidden">
        <CenterPanel />
      </div>

      <div class="col-span-3 flex flex-col h-full min-h-[400px] overflow-hidden">
        <RightPanel />
      </div>

    </main>
  </div>
</template>

<script setup>
import TopHeader from '@/components/TopHeader.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import CenterPanel from '@/components/CenterPanel.vue'
import RightPanel from '@/components/RightPanel.vue'
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0d1d;
}
</style>