const express = require('express');
const User = require('../models').User;
const router = express.Router();

router.get('/', (req, res, next) => {
  User.findAll().then((users) => {
    res.json(users);
  }).catch((err) => {
    res.json({
      message: err
    });
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id).then((user) => {
    res.json(user);
  });
});

router.post('/', (req, res, next) => {
  User.create(req.body).then((user) => {
    res.json(user);
  }).catch( (error) => {
    res.json({message: error});
  });
});

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id).then((user) => {
    user.update(req.body).then((user) => {
      res.json(user);
    });
  }).catch((err) => {
    res.json({
      msg: 'ないよー'
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  User.destroy({where: {id: id}}).then((user) => {
    res.json(user);
  }).catch( (error) => {
    res.json({message: error});
  });
});

module.exports = router;
