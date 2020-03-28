const files = require.context('../', true, /.*model\.js/);
const models = files.keys().reduce((total, key) => [
  ... total,
  files(key).default,
], []);
