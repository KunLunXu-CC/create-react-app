import React from 'react';
import moment from 'moment';
import Store from './model';
import Layout from './Layout';
import reactDom from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
moment.locale('zh-cn');

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Store>
      <Router>
        <Layout/>
      </Router>
    </Store>
  </ConfigProvider>
);

reactDom.render(<App/>, document.getElementById('root'));
