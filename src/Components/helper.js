export const toRub = (price) => {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
};

export const totalPrice = (order) => order.price * order.count;
