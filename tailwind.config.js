/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dashboard-bg': '#0a0d1d', // 背景深蓝色
        'card-bg': '#161b36',      // 卡片深色
        'primary-blue': '#2563eb', // 主色调蓝色
      },
    },
  },
  plugins: [],
}