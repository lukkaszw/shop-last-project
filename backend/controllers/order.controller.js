const Order = require('../models/order');
const Product = require('../models/product');

const postOrder = async (req, res) => {
  const { products, user, totalPrice } = req.body;
  try {
    const order = new Order({ products, user, totalPrice });
    if(order) {
      for(let i = 0; i < products.length; i++) {
        const product = await Product.findById(products[i].productId);
        if(product.amount < products[i].amount) {
          throw new Error(`${products[i].title} amount is less than ${products[i].amount}. We have only ${product.amount} in stock.`);
        }
        product.amount -= products[i].amount;
        await product.save();
      }
     
      await order.save();
    }
    
    res.json({
      order,
    });
  } catch (error) {
    res.status(500).json({
      error,
    })
  }
}


module.exports = {
  postOrder,
};