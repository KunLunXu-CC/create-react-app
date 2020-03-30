export default {
  menu: {
    logo: {
      img: void 0,
      title: '脚手架',
    },
    list: [
      {
        url: '',
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
          },
          {
            url: '/dashboard/monitor',
            title: '监控页',
            children: [],
            idGroup: void 0,
            key: 'dashboard-2',
          },
          {
            url: '/dashboard/workplace',
            title: '工作台',
            children: [],
            idGroup: void 0,
            key: 'dashboard-3',
          },
        ],
      },
    ],
  },
  router: [
    // 配置同 route 配置
    {
      path: '/dashboard/analysis',
      component: () => ('analysis'),
      exact: true,
    },
    {
      path: '/dashboard/monitor',
      component: () => ('monitor'),
      exact: true,
    },
    {
      path: '/dashboard/workplace',
      component: () => ('workplace'),
      exact: true,
    },
  ],
};
