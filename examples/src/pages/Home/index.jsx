import React from 'react';
import scss from './index.module.scss';
import { Button } from 'antd';

export default () => (
  <div className={scss.body}>
    Home
    <Button type="primary">
      按钮
    </Button>
  </div>
);
