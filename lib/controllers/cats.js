const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = Router();

router
  .get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);
    // console.log(cat);
    res.json(cat);
  })
  .get('/', (req, res) => {
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(ids);
  });

module.exports = router;
