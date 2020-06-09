import effects from './effects';
import * as reducers from './reducers';

const initState = {
  openKeys: [],
  selectedKeys: [],
  collapsed: localStorage.getItem('menuCollapsed'),
};

export default {
  effects,
  reducers,
  state: initState,
  namespace: 'menu',
};
