const escape = require('escape-html');

const escapeHtmlObject = (requestBody) => {
  const escapedRequests = {};
  Object
    .keys(requestBody)
    .forEach(reqkey => {
      escapedRequests[reqkey] = escape(requestBody[reqkey]);
    });

  return escapedRequests;
}

module.exports = escapeHtmlObject;