import effects from './effects';
import * as reducers from './reducers';

const initState = {
  openKeys: [],
  selectedKeys: [],
  collapsed: JSON.parse(
    localStorage.getItem('menu') ?? '{"collapsed": false}'
  ).collapsed,
};

export default {
  effects,
  reducers,
  state: initState,
  namespace: 'menu',
};
