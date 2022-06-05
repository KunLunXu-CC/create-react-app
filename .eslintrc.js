const fs = require('fs');
const path = require('path');

let qyNormEslint = path.resolve(__dirname, './node_modules/qy-norm/.eslintrc.js');

fs.access(qyNormEslint, fs.constants.F_OK, (err) => {
  if (!err) {
    qyNormEslint = path.resolve(__dirname, '../qy-norm/.eslintrc.js');
  }
});

module.exports = {
  globals: {
    _: true,
    _DEV_: true,
    lodash: true,
    PROJECT_PATH: true,
  },

  extends: [path.resolve(__dirname, './node_modules/qy-norm/.eslintrc.js')],
};
