function buildResult(products, discount, shipping) {
  let productsAmount = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const total = product.price * product.quantity;
    productsAmount.push(total);
  }

  let grossAmount = 0;
  for (let i = 0; i < productsAmount.length; i++) {
    grossAmount += productsAmount[i];
  }

  let discountAmount = grossAmount * discount;
  let shippingAmount = shipping;
  let netAmount = grossAmount - discountAmount + shippingAmount;
  let vatAmount = netAmount * 0.2;
  let totalAmount = netAmount + vatAmount;

  return {
    grossAmount,
    discountAmount,
    shippingAmount,
    netAmount,
    vatAmount,
    totalAmount,
  };
}


module.exports = {
  buildResult,
};