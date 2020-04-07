// 读取配置
export default () => {
  let config = {};
  try {
    config = require(`${CONFIG_DIR_PATH}/main`) || {};
  } catch (err) {
    console.log(`加载配置文件(${CONFIG_DIR_PATH})错误:`, err);
  }
  return config;
};
