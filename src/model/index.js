import React from 'react';
import utils from '@qy-utils';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

/**
 * 获取模型列表 [{ namespace, reducers, effects }]
 * 所有模型入口文件格式为 *.model.js
 * 1. namespace 模型命名空间, 决定模型在 redux 中状态所对应的 key 值
 * 2. reducers 处理状态的纯函数, {函数名}/{namespace} 组成一一对应的 action.type
 * 3. effects redux-saga effects
 */
// 获取数据模型列表
const models = utils.getModels();

/**
 * reducer 列表 [Function]
 * 1. 遍历所有 modle 组合 reducer
 * 2. 每个 reducer 对应 action.type = {model.namespace}/{reducer 函数名}
 */
const reducers = models.reduce((total, ele) => {
  const reducer = (state = ele.state, { type, ... rest }) => {
    const hande = _.find(ele.reducers, (value, key) => (
      type === `${ele.namespace}/${key}`
    ));
    return hande ? hande(state, rest) : state;
  };
  return { ... total, [ele.namespace]: reducer };
}, {});

/**
 * effects 列表 [Function]
 */
const effects = models
  .map(ele => ele.effects)
  .filter(v => _.isFunction(v));

/**
 * middleware 中间件列表
 */
const middleware = {
  sagaMiddleware: createSagaMiddleware(),
  logger: _DEV_ ? logger : void 0,
};

/**
 * compose 列表
 */
const composeList = [
  // 加载插件
  applyMiddleware(... Object.values(middleware).filter(v => v)),
  // redux DevTools 开发工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && _DEV_
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : void 0,
];

/**
 * 创建 store
 */
export const store = createStore(
  combineReducers(reducers),
  compose(... composeList.filter(v => v)),
);

/**
 * 运行 redux-saga effects
 */
effects.forEach(els => {
  middleware.sagaMiddleware.run(els);
});

/**
 * 导出 Provider 组件
 */
export default props => (
  <Provider store={store}>
    {props.children}
  </Provider>
);
