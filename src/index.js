/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import Store from './model';
import Layout from './Layout';
import ReactDOM from 'react-dom/client';
import zhCN from 'antd/es/locale/zh_CN';

import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/zh_CN';

import './assets/style';

import 'dayjs/locale/zh-cn';

const App = () => (
  <ConfigProvider locale={locale}>
    <Store>
      <Router>
        <Layout />
      </Router>
    </Store>
  </ConfigProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
