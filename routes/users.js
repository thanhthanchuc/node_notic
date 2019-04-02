const express = require('express');
const router = express.Router();
const models = require('../models'); 

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await models.User.findAll({
    attributes: ['id', 'name', 'email']
  });
  res.send(users);
});

module.exports = router;
