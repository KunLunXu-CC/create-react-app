import React, {
  useMemo,
  Fragment,
  useEffect,
} from 'react';
import utils from '../../utils';
import classNames from 'classnames';
import scss from './index.module.scss';
import * as Icons from '@ant-design/icons';
import logo from '../../../public/logo.png';

import { Menu } from 'antd';
import { IconFont } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation, matchPath } from 'react-router-dom';

// 读取配置文件
const config = utils.getConfig();

// 获取图标
const getIcon = ({ icon, isIconFont }) => {
  if (!icon) {
    return '';
  }
  if (!isIconFont) {
    const Icon = Icons[icon];
    return <Icon/>;
  }
  return <IconFont type={icon}/>;
};

const useStateHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const {
    openKeys,
    collapsed,
    selectedKeys,
  } = useSelector(state => state.menu);

  // 菜单 children
  const menuCholdren = useMemo(() => {
    const loop = list => list.map(ele => {
      const icon = getIcon(ele);
      const title = (
        <Fragment>
          {icon}
          <span>{ele.title}</span>
        </Fragment>
      );
      if (_.isArray(ele.children) && ele.children.length > 0) {
        const SubMenu = ele.idGroup ? Menu.ItemGroup : Menu.SubMenu;
        return (
          <SubMenu key={ele.key} title={title}>
            {loop(ele.children)}
          </SubMenu>
        );
      }
      return (<Menu.Item key={ele.key}>{title}</Menu.Item>);
    });
    return loop(_.get(config, 'menu') || []);
  }, []);

  // 选择菜单
  const onSelectMenu = ({ key }) => {
    const item = utils.getRoots(_.get(config, 'menu') || []).find(
      ele => ele.key === key
    );
    history.push(item.url || '404');
  };

  // subMenu 展开/关闭的回调
  const onOpenChange = openKeys => {
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
    const menuList = _.get(config, 'menu') || [];
    const findMenu = utils.getRoots(menuList).find(
      ele => (ele.router || []).find(v => (
        matchPath(location.pathname, v)
      ))
    );

    if (findMenu) {
      const path = utils.getPath(findMenu.key, menuList);
      dispatch({
        type: 'menu/setOpenKeys',
        openKeys: [... openKeys, ... path.slice(0, -1).map(v => v.key)],
      });
      dispatch({
        type: 'menu/setSelectedKey',
        selectedKey: _.last(path).key,
      });
    }
  }, [location.pathname]);

  return {
    collapsed,
    onSelectMenu,
    menuCholdren,
    onOpenChange,
    menuControlledProps,
  };
};

export default () => {
  const state = useStateHook();

  return (
    <div className={classNames(
      scss.menu,
      { [scss['menu-collapsed']]: state.collapsed }
    )}>
      <div className={scss['menu-logo']}>
        <img src={config.logo || logo} alt="logo"/>
        <div className={scss['menu-logo-title']}>
          {config.logoTitle}
        </div>
      </div>
      <Menu
        mode="inline"
        onSelect={state.onSelectMenu}
        onOpenChange={state.onOpenChange}
        {... state.menuControlledProps}>
        {state.menuCholdren}
      </Menu>
    </div>
  );
};
