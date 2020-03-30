export default {
  menu: [
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
          router: [
            {
              path: '/dashboard/analysis',
              component: () => ('analysis'),
              exact: true,
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
              path: '/dashboard/monitor',
              component: () => ('monitor'),
              exact: true,
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
              path: '/dashboard/workplace',
              component: () => ('workplace'),
              exact: true,
            },
          ],
        },
      ],
    },
  ],
};
