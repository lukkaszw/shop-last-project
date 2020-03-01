const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const productsRouter = require('./routes/products.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api/products', productsRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

require('./database/database');