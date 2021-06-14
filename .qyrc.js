const lodash = require('lodash');
const qyrc = require(`${PROJECT_PATH}/.qyrc.js`);

module.exports = lodash.merge({}, qyrc);
