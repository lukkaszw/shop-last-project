const sanitize = require('mongo-sanitize');

const sanitizeObject = (requestObject) => {
  const sanitizedRequests = {};
  Object
    .keys(requestObject)
    .forEach(reqkey => {
      sanitizedRequests[reqkey] = sanitize(requestObject[reqkey]);
    });

  return sanitizedRequests;
}

module.exports = sanitizeObject;