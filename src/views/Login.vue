<template>
  <div class="w-full h-screen bg-[#0b0f19] flex items-center justify-center relative overflow-hidden">

    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-[#0b0f19] to-[#1e1b4b]"></div>

    <div class="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
      <svg class="w-96 h-96 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    </div>

    <div class="relative z-10 w-full max-w-md bg-[#161b2c] border border-blue-500/20 rounded-xl shadow-2xl p-10">

      <div class="mb-8 text-center">
        <div class="flex justify-center mb-4">
          <img
              src="/favicon.svg"
              alt="Logo"
              class="w-12 h-12 shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 class="text-2xl font-semibold text-white tracking-wide">跃播台 · 数据中台</h1>
        <p class="text-xs text-gray-500 mt-2 uppercase tracking-widest">Leap Stream Hub Admin</p>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-xs font-medium text-gray-400 mb-1.5">账号 / Email</label>
          <div class="relative group">
            <input
                v-model="form.username"
                type="text"
                placeholder="请输入管理员账号"
                class="w-full bg-[#0b0f19] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            >
          </div>
        </div>

        <div>
          <label class="block text-xs font-medium text-gray-400 mb-1.5">密码 / Password</label>
          <div class="relative group">
            <input
                v-model="form.password"
                type="password"
                placeholder="••••••••"
                class="w-full bg-[#0b0f19] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                @keyup.enter="handleLogin"
            >
          </div>
        </div>

        <div class="flex items-center justify-between text-xs">
          <label class="flex items-center text-gray-400 cursor-pointer hover:text-gray-300">
            <input type="checkbox" class="mr-2 rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-0">
            记住登录状态
          </label>
          <a href="#" class="text-blue-500 hover:text-blue-400">忘记密码?</a>
        </div>

        <button
            @click="handleLogin"
            class="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg shadow-lg shadow-blue-900/30 transition-all active:scale-[0.98] flex justify-center items-center"
        >
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span v-else>登 录</span>
        </button>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-800 text-center">
        <p class="text-[10px] text-gray-600">© 2026 Leap Stream Technology. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const form = ref({ username: '', password: '' });

const handleLogin = () => {
  if (!form.value.username || !form.value.password) {
    alert('提示：账号密码可随意输入'); // 演示用
  }
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push('/home');
  }, 600);
};
</script>