import effects from './effects';
import * as reducers from './reducers';

const initState = {
  openKeys: [],
  selectedKeys: [],
  collapsed: false,
};

export default {
  effects,
  reducers,
  state: initState,
  namespace: 'menu',
};
