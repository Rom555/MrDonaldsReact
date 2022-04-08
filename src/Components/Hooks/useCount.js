import { useState } from 'react';

export const useCount = (startCount = 1) => {
  const [count, setCount] = useState(startCount);

  return { count, setCount };
};
