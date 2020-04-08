const getConfigDirPath = require('../src/utils/getConfigDirPath');

const CONFIG_DIR_PATH = getConfigDirPath();

module.exports = config => {
  try {
    const webpackFinal = require(`${CONFIG_DIR_PATH}/webpackFinal`) || {};
    return webpackFinal ? webpackFinal(config) : config;
  } catch (err) {
    return config;
  }
};
