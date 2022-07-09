const fs = require('fs');
const path = require('path');

// 默认取 ./node_modules/@kunlunxu/norm/.eslintrc.js 下的配置, 如果没有则取 ../@kunlunxu/norm/.eslintrc.js
let KLXNormEslint = path.resolve(__dirname, './node_modules/@kunlunxu/norm/.eslintrc.js');

try {
  fs.readFileSync(KLXNormEslint);
} catch (e) {
  // 组件库
  KLXNormEslint = path.resolve(__dirname, '../norm/.eslintrc.js');
}

module.exports = {
  globals: {
    _: true,
    _DEV_: true,
    lodash: true,
    PROJECT_PATH: true,
  },

  extends: [KLXNormEslint],
};
