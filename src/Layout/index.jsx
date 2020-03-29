import React from 'react';
import Menu from './Menu';
import scss from './index.module.scss';

export default () => (
  <div className={scss.layout}>
    <Menu/>
    <div className={scss['layout-main']}>
      <div className={scss['layout-header']}>

      </div>
      <div className={scss['layout-body']}>

      </div>
      <div className={scss['layout-footer']}>

      </div>
    </div>
  </div>
);
