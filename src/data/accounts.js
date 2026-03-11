export const accounts = [
  // ─── 账号 1：火山农品 ───────────────────────────────────────────────
  {
    credentials: { username: 'zyjnds12345', password: 'ybt63526' },
    profile: { name: '火山农品', role: '旗舰店管理员' },

    homeData: {
      stats: [
        { title: '本月累计 GMV', value: '3.51w', trend: 32.5 },
        { title: '本月成交订单', value: '1,762', trend: 28.4 },
        { title: '本月场均客单价', value: '19.9', trend: 1.5 },
        { title: '本月新增高活粉丝', value: '1,250', trend: 45.1 },
      ],
      liveRecords: [
        { id: 1, title: '3月4日直播数据复盘', date: '2026-03-04 18:00', gmv: '18,657', orders: '980', status: '已归档' },
        { id: 2, title: '3月1日直播数据复盘', date: '2026-03-01 19:30', gmv: '16,500', orders: '782', status: '已归档' },
        { id: 3, title: '2月28日直播数据复盘', date: '2026-02-28 18:00', gmv: '14,200', orders: '530', status: '已归档' },
        { id: 4, title: '2月25日直播数据复盘', date: '2026-02-25 18:00', gmv: '12,850', orders: '442', status: '已归档' },
        { id: 5, title: '2月22日直播数据复盘', date: '2026-02-22 19:30', gmv: '11,100', orders: '350', status: '已归档' },
        { id: 6, title: '2月18日直播数据复盘', date: '2026-02-18 18:00', gmv: '9,800', orders: '310', status: '已归档' },
        { id: 7, title: '2月15日直播数据复盘', date: '2026-02-15 19:00', gmv: '8,500', orders: '285', status: '已归档' },
        { id: 8, title: '2月11日直播数据复盘', date: '2026-02-11 19:30', gmv: '7,200', orders: '230', status: '已归档' },
        { id: 9, title: '2月8日直播数据复盘', date: '2026-02-08 18:00', gmv: '15,200', orders: '620', status: '已归档' },
        { id: 10, title: '2月4日直播数据复盘', date: '2026-02-04 19:00', gmv: '6,900', orders: '210', status: '已归档' },
        { id: 11, title: '2月1日直播数据复盘', date: '2026-02-01 18:00', gmv: '5,500', orders: '165', status: '已归档' },
        { id: 12, title: '1月28日直播数据复盘', date: '2026-01-28 19:30', gmv: '4,800', orders: '150', status: '已归档' },
      ],
    },

    dashboardData: {
      header: { brandName: '火山农品', date: '2026.03.04', timeRange: '18:00 - 22:00' },

      topMetrics: {
        row1: [
          { title: '本场交易总额 (GMV)', value: '1.86', unit: 'w', sub: '同比增长12.5%', desc: '本场直播期间拍下订单的总金额（包含未支付和退款订单）。' },
          { title: '本场交易件数', value: '980', unit: '件', sub: '同比涨幅 +32%', desc: '本场直播成功售出的商品总件数。' },
          { title: '成交转化率', value: '46.37', unit: '%', sub: '意向极高', desc: '成交人数 / 独立访客数。反映本次直播流量的精准度与极强的购买意愿。' },
          { title: '平均客单价', value: '19.03', unit: '元', sub: '客均消费水平', desc: '平均每笔成交订单的金额。' },
        ],
        row2: [
          { title: '商品总曝光', value: '10.8', unit: 'w', sub: '同比增长31.7%', desc: '本场直播期间商品在各渠道被展示的总次数。' },
          { title: '商品点击率', value: '31', unit: '%', sub: '同比增长28%', desc: '商品详情页点击次数 / 商品曝光次数。' },
          { title: '页面浏览次数', value: '26,471', unit: '次', sub: '同比增长26%', desc: '本场直播相关页面的累计被访问次数 (PV)。' },
          { title: '商品独立访客', value: '1,350', unit: '人', sub: '精准流量', desc: '直播间内点击查看商品详情的去重独立访客数 (UV)。' },
          { title: '千次观看成交', value: '704', unit: '元', sub: '商业变现效率', desc: 'GPM：平均每1000次观看带来的成交金额。' },
        ],
        row3: [
          { title: '商业广告消耗', value: '0', unit: '元', sub: '全自然/私域流量', desc: '本场直播投放商业化工具的累计消耗金额。' },
          { title: '退款率', value: '0.05', unit: '%', sub: '售后指标平稳', desc: '申请退款的订单数 / 总成交订单数。' },
          { title: '本场新增关注', value: '850', unit: '人', sub: '转粉率极高', desc: '本场直播期间新增的账号关注用户数。' },
          { title: '分享裂变率', value: '15.6', unit: '%', sub: '强社交传播', desc: '访客中触发分享动作的用户占比。' },
          { title: '专属社群引流', value: '420', unit: '人', sub: '沉淀私域资产', desc: '本场直播成功引导加入专属私域社群的人数。' },
        ],
      },

      bottomChart: {
        xAxis: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        gmv: [1500, 4200, 7800, 11500, 14200, 16000, 17500, 18200, 18652],
        orders: [70, 130, 210, 190, 140, 100, 80, 40, 20],
      },

      trafficSource: [
        { name: '私域/社群分享', percent: 65, color: '#3b82f6' },
        { name: '同城/校友推荐', percent: 30, color: '#10b981' },
        { name: '其他自然流量', percent: 5, color: '#f59e0b' },
      ],

      trafficTrend: {
        xAxis: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        pv: [600, 1100, 1800, 2500, 2900, 2400, 1700, 1200, 850],
        uv: [45, 85, 130, 170, 195, 150, 110, 80, 50],
      },

      trafficConversion: {
        exposure: 108000,
        pv: 26471,
        uv: 1350,
        buyers: 626,
      },

      audienceProfile: {
        labels: ['18-23岁', '24-30岁', '31-40岁', '41-50岁', '50岁以上'],
        data: [8, 27, 35, 20, 10],
      },

      productRanking: [
        { name: '火山南瓜', sales: '240', amount: '7,176' },
        { name: '小米', sales: '642', amount: '6,355.8' },
        { name: '火山西红柿', sales: '93', amount: '4,640.7' },
        { name: '文旅路线', sales: '5', amount: '495' },
      ],
    },
  },

  // ─── 账号 2：精品茶具 ───────────────────────────────────────────────
  {
    credentials: { username: 'xxj42531', password: 'ybt231' },
    profile: { name: '精品茶具', role: '旗舰店管理员' },

    homeData: {
      stats: [
        { title: '本月累计 GMV', value: '7.55w', trend: 22.8 },
        { title: '本月成交订单', value: '956', trend: 19.3 },
        { title: '本月场均客单价', value: '78.5', trend: 4.1 },
        { title: '本月新增高活粉丝', value: '520', trend: 31.6 },
      ],
      liveRecords: [
        { id: 1, title: '3月4日直播数据复盘', date: '2026-03-04 18:00', gmv: '40,290', orders: '511', status: '已归档' },
        { id: 2, title: '3月1日直播数据复盘', date: '2026-03-01 19:30', gmv: '35,200', orders: '445', status: '已归档' },
        { id: 3, title: '2月28日直播数据复盘', date: '2026-02-28 18:00', gmv: '28,400', orders: '360', status: '已归档' },
        { id: 4, title: '2月25日直播数据复盘', date: '2026-02-25 18:00', gmv: '22,800', orders: '290', status: '已归档' },
        { id: 5, title: '2月22日直播数据复盘', date: '2026-02-22 19:30', gmv: '18,500', orders: '235', status: '已归档' },
        { id: 6, title: '2月18日直播数据复盘', date: '2026-02-18 18:00', gmv: '15,200', orders: '193', status: '已归档' },
        { id: 7, title: '2月15日直播数据复盘', date: '2026-02-15 19:00', gmv: '12,800', orders: '163', status: '已归档' },
        { id: 8, title: '2月11日直播数据复盘', date: '2026-02-11 19:30', gmv: '10,400', orders: '132', status: '已归档' },
        { id: 9, title: '2月8日直播数据复盘', date: '2026-02-08 18:00', gmv: '8,900', orders: '113', status: '已归档' },
        { id: 10, title: '2月4日直播数据复盘', date: '2026-02-04 19:00', gmv: '7,200', orders: '91', status: '已归档' },
        { id: 11, title: '2月1日直播数据复盘', date: '2026-02-01 18:00', gmv: '6,100', orders: '77', status: '已归档' },
        { id: 12, title: '1月28日直播数据复盘', date: '2026-01-28 19:30', gmv: '4,500', orders: '57', status: '已归档' },
      ],
    },

    dashboardData: {
      header: { brandName: '精品茶具', date: '2026.03.04', timeRange: '18:00 - 22:00' },

      topMetrics: {
        row1: [
          { title: '本场交易总额 (GMV)', value: '4.03', unit: 'w', sub: '同比增长8.2%', desc: '本场直播期间拍下订单的总金额（包含未支付和退款订单）。' },
          { title: '本场交易件数', value: '511', unit: '件', sub: '同比涨幅 +6.5%', desc: '本场直播成功售出的商品总件数。' },
          { title: '成交转化率', value: '64.56', unit: '%', sub: '转化能力强', desc: '成交人数 / 独立访客数。反映本次直播流量的精准度与极强的购买意愿。' },
          { title: '平均客单价', value: '78.84', unit: '元', sub: '客均消费水平', desc: '平均每笔成交订单的金额。' },
        ],
        row2: [
          { title: '商品总曝光', value: '35.9', unit: 'w', sub: '同比增长18.4%', desc: '本场直播期间商品在各渠道被展示的总次数。' },
          { title: '商品点击率', value: '12.25', unit: '%', sub: '同比增长9.3%', desc: '商品详情页点击次数 / 商品曝光次数。' },
          { title: '页面浏览次数', value: '26,560', unit: '次', sub: '同比增长15.2%', desc: '本场直播相关页面的累计被访问次数 (PV)。' },
          { title: '商品独立访客', value: '900', unit: '人', sub: '精准流量', desc: '直播间内点击查看商品详情的去重独立访客数 (UV)。' },
          { title: '千次观看成交', value: '122', unit: '元', sub: '商业变现效率', desc: 'GPM：平均每1000次观看带来的成交金额。' },
        ],
        row3: [
          { title: '商业广告消耗', value: '0', unit: '元', sub: '全自然/私域流量', desc: '本场直播投放商业化工具的累计消耗金额。' },
          { title: '退款率', value: '1.80', unit: '%', sub: '售后正常区间', desc: '申请退款的订单数 / 总成交订单数。' },
          { title: '本场新增关注', value: '310', unit: '人', sub: '稳定增长', desc: '本场直播期间新增的账号关注用户数。' },
          { title: '分享裂变率', value: '9.2', unit: '%', sub: '社交传播', desc: '访客中触发分享动作的用户占比。' },
          { title: '专属社群引流', value: '155', unit: '人', sub: '沉淀私域资产', desc: '本场直播成功引导加入专属私域社群的人数。' },
        ],
      },

      bottomChart: {
        xAxis: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        gmv: [3000, 9000, 17500, 26000, 33000, 37200, 39000, 39800, 40290],
        orders: [22, 58, 88, 105, 82, 68, 45, 25, 18],
      },

      trafficSource: [
        { name: '私域/社群分享', percent: 52, color: '#3b82f6' },
        { name: 'Feed流/平台推荐', percent: 31, color: '#10b981' },
        { name: '其他自然流量', percent: 17, color: '#f59e0b' },
      ],

      trafficTrend: {
        xAxis: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        pv: [800, 2200, 4100, 5800, 5200, 4100, 2800, 1200, 360],
        uv: [10, 32, 62, 98, 88, 72, 48, 22, 8],
      },

      trafficConversion: {
        exposure: 358685,
        pv: 26560,
        uv: 900,
        buyers: 581,
      },

      audienceProfile: {
        labels: ['18-23岁', '24-30岁', '31-40岁', '41-50岁', '50岁以上'],
        data: [18, 38, 28, 12, 4],
      },

      productRanking: [
        { name: '汝窑功夫茶具12件套', sales: '168', amount: '16,800' },
        { name: '汝窑盖碗三件套', sales: '185', amount: '14,800' },
        { name: '汝窑品茗杯单杯', sales: '158', amount: '8,690' },
      ],
    },
  },
]
