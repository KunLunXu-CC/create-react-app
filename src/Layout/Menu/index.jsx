import React, {
  useMemo,
} from 'react';
import utils from '../../utils';
import scss from './index.module.scss';
import logo from '../../../public/logo.png';

import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

// 读取配置文件
const config = utils.getConfig();

const useStateHook = () => {
  const history = useHistory();

  // 点击菜单
  const onClickMenu = ({ key }) => {
    const item = utils.getRoots(_.get(config, 'menu.list') || []).find(
      ele => ele.key === key
    );
    history.push(item.url || '404');
  };

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
    return loop(_.get(config, 'menu.list') || []);
  }, []);

  return { onClickMenu, menuCholdren };
};

export default () => {
  const state = useStateHook();

  return (
    <div className={scss.menu}>
      <div className={scss['menu-logo']}>
        <img src={logo} alt="logo"/>
        <h1>脚手架</h1>
      </div>
      <Menu
        mode="inline"
        style={{ width: 220 }}
        defaultOpenKeys={['sub1']}
        defaultSelectedKeys={['1']}
        onClick={state.onClickMenu}>
        {state.menuCholdren}
      </Menu>
    </div>
  );
};
