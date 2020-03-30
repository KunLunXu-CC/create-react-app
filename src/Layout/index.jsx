import React from 'react';
import Menu from './Menu';
import Body from './Body';
import scss from './index.module.scss';

export default () => (
  <div className={scss.layout}>
    <Menu/>
    <div className={scss['layout-main']}>
      <div className={scss['layout-header']}>

      </div>
      <Body/>
      <div className={scss['layout-footer']}>
      </div>
    </div>
  </div>
);
