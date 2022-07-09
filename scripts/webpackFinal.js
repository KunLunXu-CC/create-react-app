module.exports = (config) => {
  try {
    const webpackFinal = require(`${process.env.PWD}/webpackFinal`) || {};
    return webpackFinal ? webpackFinal(config) : config;
  } catch (err) {
    return config;
  }
};
