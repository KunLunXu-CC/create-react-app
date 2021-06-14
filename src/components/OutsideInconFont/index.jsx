import qyrc from '@qy/.qyrc.js';
import { createFromIconfontCN } from '@ant-design/icons';

const iconFont = qyrc?.iconFont;

export default iconFont ? createFromIconfontCN({
  scriptUrl: iconFont,
}) : () => null;
