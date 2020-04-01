import React from 'react';
import logo from '../img/KDpgvguMpGfqaHPjicRK.svg';

export default {
  logo,                             // 自定义 logo
  logoTitle: <span>测试标题</span>,  // logo 旁边的标题: ReactElement

  menu: [   // 菜单配置
    {
      idGroup: void 0,
      key: 'dashboard',
      title: 'Dashboard',
      children: [
        {
          url: '/dashboard/analysis',
          children: [],
          title: '分析页',
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
