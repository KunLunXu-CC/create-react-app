// 读取配置
export default () => {
  let config = {};
  try {
    config = require(`${PROJECT_PATH}/config`).default || {};
  } catch (err) {
    console.log('加载配置文件错误:', err);
  }
  return config;
};
