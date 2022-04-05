export const toRub = (price) => {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
};

export const totalPrice = (order) => {
  const countToppings = order.topping && order.topping.length;
  const priceToppings = order.price * 0.1 * countToppings;

  return (order.price + priceToppings) * order.count;
};
