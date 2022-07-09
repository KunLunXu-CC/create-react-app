/**
 * 获取根数据: 对于树形结构数据, 获取其所有最深节点集合
 */
export default (data) => {
  const res = [];

  const loop = (list) => {
    if (!_.isArray(list)) {
      return false;
    }

    list.forEach((ele) => (
      _.isArray(ele.children) && ele.children.length > 0
        ? loop(ele.children)
        : res.push({ ...ele })
    ));
  };

  loop(data);
  return res;
};
