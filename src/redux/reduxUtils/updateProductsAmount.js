const updateProductsAmount = (products, cartProducts) => {

  if(cartProducts.length > 0) {
    return products
      .map(product => {

        const matchedProductIndex = cartProducts
          .findIndex(cartProd => cartProd._id === product._id);

        if(matchedProductIndex > -1) {
          product.amount -= cartProducts[matchedProductIndex].amount;
        }
        return product;
      }); 
  } 
  
  return products;
}

export default updateProductsAmount;