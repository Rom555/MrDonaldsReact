import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(1);

  return { count, setCount };
};
