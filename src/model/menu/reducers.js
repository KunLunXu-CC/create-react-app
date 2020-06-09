/**
 * 设置选中菜单 key
 * 1. reducer: action = { type: 'menu/setSelectedKey' }
 * 2. 本项目所有 reducer 对应 action.type = ${model 命名空间}/${reducer 函数名}
 *
 * @param {Object} state 当前 state
 * @param {String} action.selectedKey 选中菜单 key 值
 * @return {Object} 更新后的状态
 */
export const setSelectedKey = (state, { selectedKey }) => ({
  ... state,
  selectedKeys: [selectedKey],
});

/**
 * 设置打开菜单 keys
 * 1. reducer: action = { type: 'menu/setOpenKeys' }
 * 2. 本项目所有 reducer 对应 action.type = ${model 命名空间}/${reducer 函数名}
 *
 * @param {Object} state 当前 state
 * @param {String[]} action.openKeys 打开菜单 key 列表
 * @return {Object} 更新后的状态
 */
export const setOpenKeys = (state, { openKeys }) => ({
  ... state,
  openKeys: _.isArray(openKeys) ? openKeys : [],
});

/**
 * 切换 collapsed 状态
 * 1. reducer: action = { type: 'menu/toggleCollapsed' }
 * 2. 本项目所有 reducer 对应 action.type = ${model 命名空间}/${reducer 函数名}
 *
 * @param {Object} state 当前 state
 * @return {Object} 更新后的状态
 */
export const toggleCollapsed = state => {
  const collapsed = !state.collapsed;
  localStorage.setItem('menu', JSON.stringify({ collapsed }));
  return { ... state, collapsed };
};
