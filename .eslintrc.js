const fs = require('fs');
const path = require('path');

// 默认取 ./node_modules/qy-norm/.eslintrc.js 下的配置, 如果没有则取 ../qy-norm/.eslintrc.js
let qyNormEslint = path.resolve(__dirname, './node_modules/qy-norm/.eslintrc.js');

try {
  fs.readFileSync(qyNormEslint);
} catch (e) {
  qyNormEslint = path.resolve(__dirname, '../qy-norm/.eslintrc.js');
}

module.exports = {
  globals: {
    _: true,
    _DEV_: true,
    lodash: true,
    PROJECT_PATH: true,
  },

  extends: [qyNormEslint],
};
