const express = require('express');
const router = express.Router();
const books = require('./books.json');

// Get all the books
router.get('/', (req, res) => {
  console.log('ZZZZZ get all books');
  res.json(books);
});

// Call python
// router.get('/pythonTest', (req, res) => {
//   const spawn = require("child_process").spawn;
//   const pythonProcess = spawn('/usr/local/Cellar/jupyterlab/3.6.1/libexec/bin/python3.11',["test1.py"]);
//   pythonProcess.stdout.on('data', (data) => {
//     // Do something with the data returned from python script
//     console.log(`ZZZZZ calling Python ${data}`);
//     res.json(String.fromCharCode(...data));
//   });
// });

// Get a specific book
router.get('/:id', (req, res) => {
  console.log('ZZZZZ get one book');
  const { id } = req.params;
  res.json(books.filter((ele) => ele.id === parseInt(id)));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  books.push(body);
  res.json({ message: 'The book has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books[index] = body;
    }
  });
  res.json({ message: `The book with ID ${id} has been updated` });
  // res.json(books);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books.splice(index);
    }
  });
  res.json({ message: `Book with id #${id} has been deleted` });
});

module.exports = router;
