import lodash from 'lodash';
import projectrc from '/.projectrc.js'; // 获取根目录的 .projectrc.js 文件(并不是指当前项目)

export default lodash.merge({}, projectrc);
