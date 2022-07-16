import React from 'react';
import scss from './index.module.scss';
import projectrc from '@klx-cra/.projectrc.js';

import { useDispatch, useSelector } from 'react-redux';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const Header = projectrc?.header;

const useStateHook = () => {
  const dispatch = useDispatch();
  const { collapsed } = useSelector((state) => state.menu);

  const onToggleCollapsed = () => {
    dispatch({ type: 'menu/toggleCollapsed' });
  };

  return { collapsed, onToggleCollapsed };
};

export default () => {
  const state = useStateHook();

  return (
    <div className={scss.header}>
      <div
        onClick={state.onToggleCollapsed}
        className={scss['header-collapsed']}>
        {state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={scss['header-body']}>
        {Header ? <Header /> : null}
      </div>
    </div>
  );
};
