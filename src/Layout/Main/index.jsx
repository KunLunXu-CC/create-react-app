/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Footer from './Footer';
import utils from '@klx-cra-utils';
import scss from './index.module.scss';
import projectrc from '@klx-cra/.projectrc.js';
import NotFound from '@klx-cra-containers/NotFound';
import { useRoutes } from 'react-router-dom';

// 读取路由
const routes = utils.getRoots(projectrc.menu ?? []).reduce(
  (total, ele) => ([...total, ...(ele?.routes ?? [])]),
  [{
    path: '404',
    element: <NotFound />,
  }],
);

export default () => {
  const ele = useRoutes(routes);

  return (
    <div className={scss.main}>
      <div className={scss['main-page']}>
        {ele}
      </div>
      <Footer />
    </div>
  );
};
