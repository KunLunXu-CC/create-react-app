/* eslint-disable import/namespace */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, {
  useMemo,
  useEffect,
  Fragment,
} from 'react';
import utils from '@klx-cra-utils';
import classNames from 'classnames';
import scss from './index.module.scss';
import logo from '../../../public/logo.png';
import * as AntdIcon from '@ant-design/icons';
import projectrc from '@klx-cra/.projectrc.js';

import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { OutsideIconFont } from '@klx-cra-components';
import { useLocation, matchPath, useNavigate } from 'react-router-dom';

console.log('%c [ projectrc ]', 'font-size:13px; background:pink; color:#bf2c9f;', projectrc);

// 渲染图标
const renderIcon = (data) => {
  if (!data.icon) {
    return false;
  }

  const Icon = AntdIcon[data.icon];
  return Icon ? <Icon /> : <OutsideIconFont type={data.icon} />;
};

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    openKeys,
    collapsed,
    selectedKeys,
  } = useSelector((state) => state.menu);

  // 菜单 children
  const menuItems = useMemo(() => {
    const loop = (list) => list.map((ele) => {
      const icon = renderIcon(ele);

      const label = (
        <Fragment>
          {icon}
          {icon ? (
            <span>
              {ele.title}
            </span>
          ) : ele.title}
        </Fragment>
      );

      return {
        label,
        key: ele.key,
        children: _.isArray(ele.children) ? loop(ele.children) : void 0,
      };
    });
    return loop(projectrc.menu ?? []);
  }, []);

  // 选择菜单
  const onSelectMenu = ({ key }) => {
    const item = utils.getRoots(projectrc.menu ?? []).find(
      (ele) => ele.key === key,
    );
    navigate(item.url || '404');
  };

  // subMenu 展开/关闭的回调
  const onOpenChange = (openKeys) => {
    dispatch({
      openKeys,
      type: 'menu/setOpenKeys',
    });
  };

  // 菜单 props
  const menuControlledProps = useMemo(() => (collapsed ? {
    selectedKeys,
    inlineCollapsed: collapsed,
  } : {
    openKeys,
    selectedKeys,
    inlineCollapsed: collapsed,
  }), [collapsed, selectedKeys, openKeys]);

  useEffect(() => {
    const menuList = projectrc.menu ?? [];

    const findMenu = utils.getRoots(menuList).find(
      (ele) => ele.routes.find((v) => matchPath(v, location.pathname)),
    );

    if (findMenu) {
      const path = utils.getPath(findMenu.key, menuList);
      dispatch({
        type: 'menu/setOpenKeys',
        openKeys: [...openKeys, ...path.slice(0, -1).map((v) => v.key)],
      });
      dispatch({
        type: 'menu/setSelectedKey',
        selectedKey: _.last(path).key,
      });
    }
  }, [dispatch, location.pathname, openKeys]);

  return (
    <div className={classNames(
      scss.menu,
      { [scss['menu-collapsed']]: collapsed },
    )}>
      <div className={scss['menu-logo']}>
        <img
          alt="logo"
          src={projectrc.logo?.img ?? logo}
        />
        <div className={scss['menu-logo-title']}>
          {projectrc.logo?.title}
        </div>
      </div>
      <div className={scss['menu-body']}>
        <Menu
          mode="inline"
          items={menuItems}
          onSelect={onSelectMenu}
          onOpenChange={onOpenChange}
          {...menuControlledProps}
        />
      </div>
    </div>
  );
};
