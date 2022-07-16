import React from 'react';
import moment from 'moment';
import Store from './model';
import Layout from './Layout';
import ReactDOM from 'react-dom/client';
import zhCN from 'antd/es/locale/zh_CN';

import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import './assets/style';
moment.locale('zh-cn');

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Store>
      <Router>
        <Layout />
      </Router>
    </Store>
  </ConfigProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
