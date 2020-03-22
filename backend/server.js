const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const productsRouter = require('./routes/products.routes');
const ordersRouter = require('./routes/order.routes');


app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://lukkiasz-shop-store.herokuapp.com' : 'http://localhost:3000',
}));

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));                               
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

require('./database/database');