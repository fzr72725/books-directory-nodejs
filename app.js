const books = require('./books');
const express = require('express');
const port = 3009;
//const books = require('./books');

const app = express();

app.use(express.json());
app.use('/', books);

app.use(express.static('.'))


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app