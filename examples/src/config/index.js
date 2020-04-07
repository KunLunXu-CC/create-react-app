module.exports = {
  logo: {             // logo 配置
    img: void 0,      // logo 配置图片: require('*/**/*.png')
    title: '测试标题', // 标题
  },
  footer: () => ('footer'),  // 组件
  header: () => ('header'),  // 组件
  iconFont: '//at.alicdn.com/t/font_1141137_lyeqynh5bq.js', // iconFont 外链
  menu: [  // 菜单配置
    {
      key: 'canvas',
      title: 'canvas',
      icon: 'icon-dingdanjine',
      children: [
        {
          key: 'particle',
          title: 'particle',
          icon: 'icon-rili',
          children: [
            {
              key: 'particle_1',
              title: 'particle_1',
              icon: 'AndroidOutlined',
              url: '/canvas/particle/1',
              router: [
                {
                  exact: true,
                  path: '/canvas/particle/1',
                  component: () => ('particle_1'),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  webpackFinal: void 0,
};
