const { Router } = require('express');
const Cat = require('../models/Cat');

// const router = Router();

module.exports = Router()
// .get('/:id', (req, res) => {
//   const cat = cats.find((cat) => cat.id === req.params.id);
//   // console.log(cat);
//   res.json(cat);
// })
// .get('/', (req, res) => {
//   const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
//   res.json(ids);
// });
  .get('/:id', async (req, res) => {
    const cat = await Cat.getById(req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    console.log(cats);
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(ids);
  });

// module.exports = router;
