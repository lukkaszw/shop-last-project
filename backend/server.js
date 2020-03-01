const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'build')));


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});