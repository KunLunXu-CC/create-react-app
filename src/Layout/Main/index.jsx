import React from 'react';
import Footer from './Footer';
import utils from '@utils';
import projectrc from '@/.projectrc.js';
import scss from './index.module.scss';
import NotFound from '@containers/NotFound';
import { Switch, Route } from 'react-router-dom';

// 读取路由
const router = utils.getRoots(projectrc.menu ?? []).reduce(
  (total, ele) => ([...total, ...(ele?.routers ?? [])]),
  [],
);

console.log('%c [ router ]', 'font-size:13px; background:pink; color:#bf2c9f;', router);

export default () => (
  <div className={scss.main}>
    <div className={scss['main-page']}>
      <Switch>
        {router.map(({ exact = false, path, component  }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            component={component?.default ?? component}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </div>
);
