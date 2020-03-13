const Product = require('../models/product');

const getProducts = async (req, res) => {
  let select = '';
  if(req.query.only) {
    const { only } = req.query;
    select = only.split('-').join(' ');
  }

  let skip = 0;
  let limit;
  const match = {};

  if(req.query.skip) {
    skip = parseInt(req.query.skip);
  }

  if(req.query.limit) {
    limit = parseInt(req.query.limit);
  }

  if(req.query.search) {
    const regexText = new RegExp(req.query.search, 'ig');
    match.title = {
      $regex: regexText,
    }
  }

  if(req.query.categories) {
    const categories = req.query.categories.split('_');
    match.categories = {
      $in: categories,
    }
  }
 

  try {
    const allDocsAmount =  await Product.find(match).countDocuments();
    const products = await Product
      .find(match)
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit)
      .select(select);

    res.json({
      products,
      allDocsAmount,
    });
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
