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

// const express = require('express')

// const app = express()
// const PORT = 4000

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳')
// })

// app.get('/about', (req, res) => {
//   res.send('This is my about route..... ')
// })

// module.exports = app