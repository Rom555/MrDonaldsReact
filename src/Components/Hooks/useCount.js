import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(1);

  const onChange = (e) => setCount(e.target.value);

  return { count, setCount, onChange };
};
