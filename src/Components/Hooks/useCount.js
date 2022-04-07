import { useState } from 'react';

export const useCount = (num = 1) => {
  const [count, setCount] = useState(num);

  return { count, setCount };
};
