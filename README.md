# qy-create-react

基于 React 和 Antd　的一套中后台集成框架

## 使用方法

### 一、 安装依赖

```sh
npm i qy-create-react
npm i cross-env -D
```

### 二、 修改 npm 脚本

1. 使用 cross-env 定义环境变量 CONFIG_PATH
2. CONFIG_PATH 则定义了配置文件的位置

```json
"scripts": {
  "start": "cross-env CONFIG_PATH=./src/config react-script start",
  "build": "react-script build"
},
```

### 三、 在对应位置添加配置文件

- 默认加载项目目录下 config.js 文件
- 可通过设置环境变量 cross-env CONFIG_PATH=./src/config 来指定配置文件位置
- 可以将配置文件放置在 config 目录下但是文件名必须是 index.js 如: config/index.js

#### 3.1 配置文件说明


```js
import React, {
  Fragment,
} from 'react';
import { AndroidOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo.png';

export default {
  // 1. logo 配置
  logo: {
    img: logo,                        // 指定 logo, 可选
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
              component: () => ('Analysis'),
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
