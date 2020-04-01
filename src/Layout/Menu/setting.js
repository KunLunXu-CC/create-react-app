import React, {
  useMemo,
} from 'react';

const Tools = () => {
  const name = useMemo(() => 'qy', []);
  return <span>{name}</span>;
};

export default {
  tool: <Tools/>,
};
