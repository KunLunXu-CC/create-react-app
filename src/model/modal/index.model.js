import effects from './effects';
import * as reducers from './reducers';

const initState = {};

export default {
  effects,
  reducers,
  state: initState,
  namespace: 'modal',
};
