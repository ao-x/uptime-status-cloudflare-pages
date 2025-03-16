// 配置
window.Config = {
  SiteName: process.env.SITE_NAME || '站点监测页',
  ApiKeys: process.env.UPTIMEROBOT_API_KEYS?.split(',') || [],
  CountDays: parseInt(process.env.COUNT_DAYS) || 30,
  ShowLink: process.env.SHOW_LINK === 'true',
  Navi: [
    {
      text: 'GitHub',
      url: 'https://github.com/ao-x/uptime-status-cloudflare-pages'
    },
  ],
};
