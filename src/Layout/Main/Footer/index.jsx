import React from 'react';
import utils from '../../../utils';

// 读取配置文件
const { footer: Footer } = utils.getConfig();

export default () => (
  Footer ? <Footer/> : null
);
