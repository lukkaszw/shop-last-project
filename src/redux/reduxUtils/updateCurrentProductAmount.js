const updateCurrentProductAmount = (product, cartProducts) => {
  if(cartProducts.length > 0) {
    const matchedItemInCart = cartProducts.find(cartItem => cartItem._id === product._id);
    if(matchedItemInCart) {
      product.amount -= matchedItemInCart.amount;
    } 
  }

  return product;
}

export default updateCurrentProductAmount;