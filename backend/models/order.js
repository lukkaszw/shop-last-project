const mongoose = require('mongoose');
const _v = require('validator');

const orderSchema = new mongoose.Schema({ 
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
    }
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) => _v.isEmail(v),
        message: (props) => `${props.value} is not a valid e-mail!`,
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/.test(v),
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    country: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      require: true,
      validate: {
        validator: (v) => _v.isPostalCode(v, 'PL'),
        message: (props) => `${props.value} is not a valid postal code!`,
      }
    },
    city: {
      type: String,
      required: true,
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);