// 使用 process.env 访问环境变量
const getEnvVar = (key, defaultValue) => {
  // Cloudflare Workers 使用 `process.env` 来访问环境变量
  return process.env[key] !== undefined ? process.env[key] : defaultValue;
};

window.Config = {
  // 使用环境变量或提供默认值
  SiteName: getEnvVar('SITE_NAME', 'AO-X 站点监测'),
  ApiKeys: JSON.parse(getEnvVar('API_KEYS', '["ur2012830-87a31646e0e36ccca208da18"]')),
  CountDays: parseInt(getEnvVar('COUNT_DAYS', 60), 10),
  ShowLink: getEnvVar('SHOW_LINK', 'true') === 'true',
  Navi: [{
    text: 'GitHub',
    url: 'https://github.com/ao-x/uptime-status-cloudflare-pages'
  }]
};