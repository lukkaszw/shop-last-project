const mongoose = require('mongoose');
const isValidPath = require('is-valid-path');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    enum: ['box', 'key'],
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  oldPrice: {
    type: Number,
    validate: {
      validator: (v) => v >= 0,
      message: (props) => `${props.value} is not positive number divisible by 100`,
    },
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => v >= 0,
      message: (props) => `${props.value} is not positive number divisible by 100`,
    },
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 200,
    maxlength: 400,
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isValidPath(v),
      message: (props) => `${props.value} is not a valid url!`
    },
  },
  gallery: [{
    img: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isValidPath(v),
        message: (props) => `${props.value} is not a valid url!`
      },
    },
    minImg: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isValidPath(v),
        message: (props) => `${props.value} is not a valid url!`
      },
    }
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);