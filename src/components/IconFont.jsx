import utils from '../utils';

import { createFromIconfontCN } from '@ant-design/icons';

// 读取配置文件
const config = utils.getConfig();

const IconFont = config.iconFont ? createFromIconfontCN({
  scriptUrl: config.iconFont,
}) : () => null;

export default IconFont;
