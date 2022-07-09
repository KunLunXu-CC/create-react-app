/**
 * 获取模型列表 [{ namespace, reducers, effects }]
 * 所有模型入口文件格式为 *.model.js
 * 1. namespace 模型命名空间, 决定模型在 redux 中状态所对应的 key 值
 * 2. reducers 处理状态的纯函数, {函数名}/{namespace} 组成一一对应的 action.type
 * 3. effects redux-saga effects
 */
export default () => {
  const publicFiles = require.context('../model', true, /.*model\.js/);
  const publicModels = publicFiles.keys().reduce((total, key) => [
    ...total,
    publicFiles(key).default,
  ], []);

  let restModels = [];

  try {
    const restFiles = require.context(
      `${PROJECT_PATH}/src`,
      true,
      /.*model\.js/,
    );
    restModels = restFiles.keys().reduce((total, key) => [
      ...total,
      restFiles(key).default,
    ], []);
  } catch (e) {
    console.log(`读取模型(${PROJECT_PATH}/src)错误`, e);
  }

  return [...publicModels, ...restModels];
};

