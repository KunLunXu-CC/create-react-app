import React, {
  useMemo,
  useEffect,
} from 'react';
import utils from '../../utils';
import classNames from 'classnames';
import scss from './index.module.scss';
import logo from '../../../public/logo.png';

import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation, matchPath } from 'react-router-dom';

// 读取配置文件
const config = utils.getConfig();

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
      if (_.isArray(ele.children) && ele.children.length > 0) {
        const SubMenu = ele.idGroup ? Menu.ItemGroup : Menu.SubMenu;
        return (
          <SubMenu key={ele.key} title={ele.title}>
            {loop(ele.children)}
          </SubMenu>
        );
      }
      return (<Menu.Item key={ele.key}>{ele.title}</Menu.Item>);
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
    openKeys,
    collapsed,
    onSelectMenu,
    menuCholdren,
    onOpenChange,
    selectedKeys,
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
        <img src={logo} alt="logo"/>
        <h1>脚手架</h1>
      </div>
      <Menu
        mode="inline"
        onSelect={state.onSelectMenu}
        onOpenChange={state.onOpenChange}
        inlineCollapsed={state.collapsed}
        openKeys={state.collapsed ? void 0 : state.openKeys}
        selectedKeys={state.selectedKeys}>
        {state.menuCholdren}
      </Menu>
    </div>
  );
};
