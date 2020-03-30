const files = require.context('./', true, /(?<!index)\.js$/);

export default files.keys().reduce((total, key) => {
  /\/(.*?)\.js$/.test(key);
  return {
    ... total,
    [RegExp.$1]: files(key).default,
  };
}, {});
