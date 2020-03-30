export default (key, treeList) => {
  const result = [];
  const recursion = (list = []) => {
    if (!_.isArray(list) || list.length < 1) {
      return false;
    }
    list.forEach(item => {
      result.push(item);
      if (_.isArray(item.children) && item.children.length > 0) {
        recursion(item.children);
      } else if (item.key === key) {
        throw new Error();
      } else {
        result.pop();
      }
    });
    result.pop();
  };
  try {
    recursion(treeList);
  } catch (e) {
    //
  }
  return result;
};
