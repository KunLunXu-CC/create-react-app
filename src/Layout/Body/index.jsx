import React from 'react';
import utils from '../../utils';
import scss from './index.module.scss';

import { Switch, Route } from 'react-router-dom';

// 读取配置文件
const config = utils.getConfig();

export default () => (
  <div className={scss.body}>
    <Switch>
      {(_.get(config, 'router') || []).map((v, index) => (
        <Route key ={index} {... v}/>
      ))}
    </Switch>
  </div>
);
