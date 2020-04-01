import React from 'react';
import Footer from './Footer';
import utils from '../../utils';
import scss from './index.module.scss';
import NotFound from '../../containers/NotFound';
import { Switch, Route } from 'react-router-dom';

// 读取配置文件
const config = utils.getConfig();

// 读取路由
const router = utils.getRoots(_.get(config, 'menu') || []).reduce(
  (total, ele) => ([... total, ... (ele.router)]), []
);

export default () => (
  <div className={scss.main}>
    <div className={scss['main-page']}>
      <Switch>
        {router.map((v, index) => (
          <Route key ={index} {... v}/>
        ))}
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer/>
  </div>
);
