/**
 *
 * @param {Array} products cartProducts
 * @returns {number} total price
 */

export const totalPrice = (products) => {
  const sumWithInitial = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  )
  return sumWithInitial;
}
