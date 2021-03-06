const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  //find all
  Category.findAll({
    include: [Product],
  }).then(results => {
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value "where"
    Category.findOne({ 
      where: {
        id: req.params.id,
      },
      include: [Product]
    }).then(results => {
      res.json(results);
    });
});

router.post('/', (req, res) => {
  // create a new category    //Need to confirm this
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name,
  }).then(results => {
    res.json(results);
  })
});

router.put('/:id', (req, res) => {
  //update a category by its `id` value
  
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(results => {
    res.json(results);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(results => {
    res.json(results);
  });
});

module.exports = router;
