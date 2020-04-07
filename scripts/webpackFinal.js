const getConfigDirPath = require('../src/utils/getConfigDirPath');

const CONFIG_DIR_PATH = getConfigDirPath();

module.exports = config => {
  try {
    const webpackFinal = require(`${CONFIG_DIR_PATH}/webpackFinal`) || {};
    return webpackFinal ? webpackFinal(config) : config;
  } catch (err) {
    console.log(`加载配置文件(${CONFIG_DIR_PATH})错误:`, err);
  }
  return config;
};
