import utils from '../../utils';

import { createFromIconfontCN } from '@ant-design/icons';

// 读取配置文件
const config = utils.getConfig();

const iconFont = _.get(config, 'iconFont');

export default iconFont ? createFromIconfontCN({
  scriptUrl: iconFont,
}) : () => null;
