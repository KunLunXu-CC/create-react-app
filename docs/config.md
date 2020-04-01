# 配置文件

- 默认加载项目目录下 config.js 文件
- 可通过设置环境变量 cross-env CONFIG_PATH=./src/config 来指定配置文件位置
- 可以将配置文件放置在 config 目录下但是文件名必须是 index.js 如: config/index.js

## 配置文件说明


```js
export default {
  // 1. logo 配置
  logo: {
    img: require('**/**/*.png'),    // 指定 logo 图片
    title: <span>logo 标题</span>,   // 指定 logo 标题, 可以任何 ReactElement
  },

  // header 右侧 工具栏: React 组件数组
  tools: [
    () => (<AndroidOutlined/>),
    () => (<AndroidOutlined/>),
    () => (<AndroidOutlined/>),
    () => (<AndroidOutlined/>),
  ],

  // 菜单配置
  // 1. idGroup 是否分组组件将使用 antd Menu.ItemGroup 来渲染节点
  // 2. key 唯一 key 值
  // 3. title 则是菜单标题, 可以是任意 ReactElement
  // 4. children 子级配置
  // 5. router 表示当前页面下所有路由配置列表, 每个配置项参数同 react-router Route 组件参数
  menu: [
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
              component: Analysis,
              path: '/dashboard/analysis',
            },
          ],
        },
      ],
    },
  ],

  // 页面底部要显示内容: React 组件
  footer: () => (<div>footer</div>),
};

```
