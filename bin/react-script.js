#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const path = require('path');
// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'start'
);

const script = scriptIndex === -1 ? args[0] : args[scriptIndex];

if (['start', 'build'].includes(script)) {

  // 设置环境变量
  require('../utils/setEnv')(script);

  // 执行脚本
  require(path.resolve(__dirname, `../scripts/${script}`));
  // process.exit(1);
} else {
  console.log('Unknown script "' + script + '".');
  console.log('Perhaps you need to update react-scripts?');
  console.log(
    'See: https://facebook.github.io/create-react-app/docs/updating-to-new-releases'
  );
}
