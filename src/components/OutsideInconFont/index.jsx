import projectrc from '@/.projectrc.js';
import { createFromIconfontCN } from '@ant-design/icons';

const iconFont = projectrc?.iconFont;

export default iconFont ? createFromIconfontCN({
  scriptUrl: iconFont,
}) : () => null;
