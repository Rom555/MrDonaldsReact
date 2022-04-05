import { useState } from 'react';

const getToppings = (toppings) =>
  toppings.map((item) => ({
    name: item,
    checked: false,
  }));

export const useToppings = (openItem) => {
  if (!openItem.toppings) openItem['toppings'] = [];

  const [toppings, setToppings] = useState(getToppings(openItem.toppings));

  const checkToppings = (index) => {
    setToppings(
      toppings.map((item, i) => {
        if (index === i) item.checked = !item.checked;

        return item;
      })
    );
  };

  return { toppings, checkToppings };
};
