import React, {
  Fragment,
} from 'react';
import logo from '../img/KDpgvguMpGfqaHPjicRK.svg';
import { AndroidOutlined } from '@ant-design/icons';

export default {
  // logo 配置: 图片、标题
  logo: {
    img: logo,
    title: <span>测试标题</span>,
  },

  menu: [   // 菜单配置
    {
      idGroup: void 0,
      key: 'dashboard',
      title: (
        <Fragment>
          <AndroidOutlined />
          <span>Dashboard</span>
        </Fragment>
      ),
      children: [
        {
          url: '/dashboard/analysis',
          children: [],
          title: (
            <Fragment>
              <AndroidOutlined />
              <span>分析页</span>
            </Fragment>
          ),
          idGroup: void 0,
          key: 'dashboard-1',
          router: [
            {
              exact: true,
              path: '/dashboard/analysis',
              component: () => ('analysis'),
            },
          ],
        },
        {
          url: '/dashboard/monitor',
          title: '监控页',
          children: [],
          idGroup: void 0,
          key: 'dashboard-2',
          router: [
            {
              exact: true,
              path: '/dashboard/monitor',
              component: () => ('monitor'),
            },
          ],
        },
        {
          url: '/dashboard/workplace',
          title: '工作台',
          children: [],
          idGroup: void 0,
          key: 'dashboard-3',
          router: [
            {
              exact: true,
              path: '/dashboard/workplace',
              component: () => ('workplace'),
            },
          ],
        },
      ],
    },
  ],
};
