const path = require('path');

module.exports = {
  globals: {
    _: true,
    _DEV_: true,
    lodash: true,
    PROJECT_PATH: true,
  },
  extends: [path.resolve(__dirname, './node_modules/qy-norm/.eslintrc.js')],
};
