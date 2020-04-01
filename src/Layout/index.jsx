import React from 'react';
import Menu from './Menu';
import Main from './Main';
import Header from './Header';
import scss from './index.module.scss';

export default () => (
  <div className={scss.layout}>
    <Menu/>
    <div className={scss['layout-body']}>
      <Header/>
      <Main/>
    </div>
  </div>
);
