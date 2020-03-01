const Product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const prodId = req.params.id;

    const product = await Product.findById(prodId);
    if(!product) {
      res.status(404).json({
        error: {
          message: 'Product not found!',
        },
      });
      return;
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

const postProduct = async (req, res) => {
  console.log('postProduct');
  const { title, variant, categories, oldPrice, price, amount, description, imageUrl, gallery  } = req.body;
  
  try {
    const product = new Product({
      title,
      variant,
      categories,
      oldPrice,
      price,
      amount,
      description,
      imageUrl,
      gallery,
    });
    console.log(product);
    await product.save();
    res.status(201).json({
      product,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}


module.exports = {
  getProducts,
  getProduct,
  postProduct,
}
