const path = require('path');

// 获取配置文件路径: 默认为项目目录下 src/config
module.exports = () => path.join(
  process.env.PWD,
  process.env.CONFIG_DIR_PATH || './src/config',
);
