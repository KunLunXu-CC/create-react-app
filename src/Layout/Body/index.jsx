import React from 'react';
import utils from '../../utils';
import scss from './index.module.scss';

import { Switch, Route } from 'react-router-dom';

// 读取配置文件
const config = utils.getConfig();

// 读取路由
const router = utils.getRoots(_.get(config, 'menu') || []).reduce(
  (total, ele) => ([... total, ... (ele.router)]), []
);

export default () => (
  <div className={scss.body}>
    <Switch>
      {router.map((v, index) => (
        <Route key ={index} {... v}/>
      ))}
    </Switch>
  </div>
);
