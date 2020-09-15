const Order = require('../models/order');
const Product = require('../models/product');

const postOrder = async (req, res) => {
  const { products, user, totalPrice } = req.body;
  /* 
    In normal circumstances user from request will be stored in database
    but because of RODO I have used dummy user data for all documents in database.
    I don't want to be responsible for personal data processing!
  */

  const dummyUser = {
    name: 'Name Surname',
    email: 'dummy812313email912341@gmail.pl',
    phone: '111 111 111',
    country: 'Poland',
    address: 'ul. Nieistniejąca 30/600',
    postCode: '01-002',
    city: 'Warsaw',
  };

  try {
    const order = new Order({ products, user: dummyUser, totalPrice });
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