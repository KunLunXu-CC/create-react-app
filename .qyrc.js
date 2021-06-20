import lodash from 'lodash';
import qyrc from '/.qyrc.js'; // 获取根目录的 .qyrc.js 文件(并不是指当前项目)

export default lodash.merge({}, qyrc);
