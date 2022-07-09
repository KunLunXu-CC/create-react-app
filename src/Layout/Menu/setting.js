import React, {
  useMemo,
} from 'react';

const Tools = () => {
  const name = useMemo(() => '项目名称', []);
  return (
    <span>
      {name}
    </span>
  );
};

export default {
  tool: <Tools />,
};
