const escapeHtmlObject = require('../../utils/escapeHtmlObject');
const sanitizeObject = require('../../utils/sanitizeObject');

const escapeAndSanitize = (req, res, next) => {
  console.log(req.body);
  const parsedProducts = req.body.products
    .map(product => escapeHtmlObject(product))
    .map(product => sanitizeObject(product));
  const escapedUser = escapeHtmlObject(req.body.user);
  const parsedUser = sanitizeObject(escapedUser);
  req.body.products = parsedProducts;
  req.body.user = parsedUser;
  next();
}

module.exports = escapeAndSanitize;