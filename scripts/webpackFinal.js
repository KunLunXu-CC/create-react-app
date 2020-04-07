const path = require('path');

const CONFIG_PATH = path.join(
  process.env.PWD,
  process.env.CONFIG_PATH || './config.js'
);

module.exports = config => {
  try {
    const { webpackFinal } = require(CONFIG_PATH).default || {};
    return webpackFinal ? webpackFinal(config) : config;
  } catch (err) {
    console.log(`加载配置文件(${CONFIG_PATH})错误:`, err);
  }
  return config;
};
