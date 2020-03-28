const path = require('path');

module.exports = script => {
  const env = { ... process.env };

  process.env = {
    ... env,
    NODE_ENV: script === 'start' ? 'development' : 'production',
    PROJECT_PATH: env.NPM_DEV 
      ? path.resolve(__dirname, '../examples') 
      : path.resolve(__dirname, '../../../') 
  };
};
