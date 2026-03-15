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
        { name: '火山南瓜', sales: '240', amount: '¥7,176' },
        { name: '小米', sales: '642', amount: '¥6,355.8' },
        { name: '火山西红柿', sales: '93', amount: '¥4,640.7' },
        { name: '文旅路线', sales: '5', amount: '¥495' },
      ],
    },
  },

  // ─── 账号 2：精品茶具 ───────────────────────────────────────────────
  {
    credentials: { username: 'xxj42531', password: 'ybt231' },
    profile: { name: '精品茶具', role: '旗舰店管理员' },

    homeData: {
      stats: [
        { title: '本月累计 GMV', value: '73.93w', trend: 361.5 },
        { title: '本月成交订单', value: '1,566', trend: -23.0 },
        { title: '本月场均客单价', value: '$78.84', trend: 8.5 },
        { title: '本月新增高活粉丝', value: '2,150', trend: 35.2 },
      ],
      liveRecords: [
        { id: 1, title: '3月16日直播数据复盘', date: '2026-03-16 18:00', gmv: '241,300', orders: '511', status: '已归档' },
        { id: 2, title: '3月14日直播数据复盘', date: '2026-03-14 19:30', gmv: '162,000', orders: '343', status: '已归档' },
        { id: 3, title: '3月13日直播数据复盘', date: '2026-03-13 18:00', gmv: '125,000', orders: '265', status: '已归档' },
        { id: 4, title: '3月10日直播数据复盘', date: '2026-03-10 18:00', gmv: '93,500',  orders: '198', status: '已归档' },
        { id: 5, title: '3月7日直播数据复盘',  date: '2026-03-07 19:30', gmv: '68,000',  orders: '144', status: '已归档' },
        { id: 6, title: '3月3日直播数据复盘',  date: '2026-03-03 18:00', gmv: '49,500',  orders: '105', status: '已归档' },
        { id: 7, title: '2月28日直播数据复盘', date: '2026-02-28 19:00', gmv: '36,000',  orders: '76',  status: '已归档' },
        { id: 8, title: '2月24日直播数据复盘', date: '2026-02-24 19:30', gmv: '26,500',  orders: '56',  status: '已归档' },
        { id: 9, title: '2月21日直播数据复盘', date: '2026-02-21 18:00', gmv: '19,800',  orders: '42',  status: '已归档' },
        { id: 10, title: '2月17日直播数据复盘', date: '2026-02-17 19:00', gmv: '14,200', orders: '30',  status: '已归档' },
        { id: 11, title: '2月14日直播数据复盘', date: '2026-02-14 18:00', gmv: '10,500', orders: '22',  status: '已归档' },
        { id: 12, title: '2月10日直播数据复盘', date: '2026-02-10 19:30', gmv: '7,800',  orders: '17',  status: '已归档' },
      ],
    },

    dashboardData: {
      header: { brandName: '精品茶具', date: '2026.03.16', timeRange: '18:00 - 22:00' },

      topMetrics: {
        row1: [
          { title: '本场交易总额 (GMV)', value: '24.13',  unit: 'w',  sub: '同比增长 498.5%', desc: '本场直播期间拍下订单的总金额（包含未支付和退款订单）。' },
          { title: '本场交易件数',       value: '511',    unit: '件', sub: '同比涨幅 +6.5%',  desc: '本场直播成功售出的商品总件数。' },
          { title: '成交转化率',         value: '6.3',    unit: '%',  sub: '广泛引流拉新',    desc: '成交人数 / 独立访客数。反映本次直播流量的精准度与购买意愿。' },
          { title: '平均客单价',         value: '$78.84', unit: '',   sub: '客均消费水平',    desc: '平均每笔成交订单的金额（美元）。' },
        ],
        row2: [
          { title: '商品总曝光',   value: '36.5',   unit: 'w',  sub: '同比增长 18.4%', desc: '本场直播期间商品在各渠道被展示的总次数。' },
          { title: '商品点击率',   value: '7.8',    unit: '%',  sub: '同比增长 9.3%',  desc: '商品详情页点击次数 / 商品曝光次数。' },
          { title: '页面浏览次数', value: '26,980', unit: '次', sub: '同比增长 1.6%',  desc: '本场直播相关页面的累计被访问次数 (PV)。' },
          { title: '商品独立访客', value: '6,750',  unit: '人', sub: '精准流量',        desc: '直播间内点击查看商品详情的去重独立访客数 (UV)。' },
          { title: '千次观看成交', value: '731',    unit: '元', sub: '商业变现效率',    desc: 'GPM：平均每1000次观看带来的成交金额。' },
        ],
        row3: [
          { title: '商业广告消耗', value: '0',    unit: '元', sub: '全自然/私域流量', desc: '本场直播投放商业化工具的累计消耗金额。' },
          { title: '退款率',       value: '1.80', unit: '%',  sub: '售后正常区间',    desc: '申请退款的订单数 / 总成交订单数。' },
          { title: '本场新增关注', value: '580',  unit: '人', sub: '稳定增长',         desc: '本场直播期间新增的账号关注用户数。' },
          { title: '分享裂变率',   value: '9.2',  unit: '%',  sub: '社交传播',         desc: '访客中触发分享动作的用户占比。' },
          { title: '专属社群引流', value: '180',  unit: '人', sub: '沉淀私域资产',     desc: '本场直播成功引导加入专属私域社群的人数。' },
        ],
      },

      bottomChart: {
        xAxis: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        gmv: [18000, 54000, 105000, 156000, 198000, 222000, 234000, 240000, 241300],
        orders: [22, 58, 88, 105, 82, 68, 45, 25, 18],
      },

      trafficSource: [
        { name: '私域/社群分享',   percent: 48, color: '#3b82f6' },
        { name: 'Feed流/平台推荐', percent: 35, color: '#10b981' },
        { name: '其他自然流量',    percent: 17, color: '#f59e0b' },
      ],

      trafficTrend: {
        xAxis: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        pv: [800,  2200, 4100, 5800, 5200, 4100, 2800, 1200, 360],
        uv: [150,   490,  960, 1500, 1350, 1100,  720,  340, 140],
      },

      trafficConversion: {
        exposure: 365000,
        pv: 26980,
        uv: 6750,
        buyers: 425,
      },

      audienceProfile: {
        labels: ['18-23岁', '24-30岁', '31-40岁', '41-50岁', '50岁以上'],
        data: [12, 32, 35, 16, 5],
      },

      productRanking: [
        { name: '汝窑功夫茶具12件套', sales: '168', amount: '$16,800' },
        { name: '汝窑盖碗三件套',     sales: '185', amount: '$14,800' },
        { name: '汝窑品茗杯单杯',     sales: '158', amount: '$8,690'  },
      ],
    },
  },
]
