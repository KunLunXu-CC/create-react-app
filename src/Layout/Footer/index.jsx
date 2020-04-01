import React from 'react';
import utils from '../../utils';
import scss from './index.module.scss';

// 读取配置文件
const { footer: Footer } = utils.getConfig();

export default () => (
  <div className={scss.footer}>
    {Footer ? <Footer/> : null}
  </div>
);
