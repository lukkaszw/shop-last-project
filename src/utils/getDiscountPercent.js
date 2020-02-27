const getDiscountPercent = (price, oldPrice) => {
  return Math.ceil(((oldPrice - price)/oldPrice) * 100)
}

export default getDiscountPercent;