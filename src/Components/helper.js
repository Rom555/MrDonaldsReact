export const toRub = (price) => {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
};

export const totalPrice = (order) => {
  const toppings = order.topping.filter((item) => item.checked);
  const countToppings = toppings && toppings.length;
  const priceToppings = order.price * 0.1 * countToppings;

  return (order.price + priceToppings) * order.count;
};

export const projection = (rules) => {
  const keys = Object.keys(rules);
  return (obj) =>
    keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);
      return newObj;
    }, {});
};
