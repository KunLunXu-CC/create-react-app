import React from 'react';
import Menu from './Menu';
import Body from './Body';
import Header from './Header';
import scss from './index.module.scss';

export default () => (
  <div className={scss.layout}>
    <Menu/>
    <div className={scss['layout-main']}>
      <Header/>
      <Body/>
      <div className={scss['layout-footer']}>
      </div>
    </div>
  </div>
);
