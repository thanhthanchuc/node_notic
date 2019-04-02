const express = require('express');
const router = express.Router();
const _ = require('underscore');
const models = require('../models'); 
const { validate } = require('../services/user');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await models.User.findAll({
    attributes: ['id', 'name', 'email']
  });
  res.send(users);
});

//get instant of user
router.get('/:id', async (req, res) => {
  const user = await models.User.findByPk(parseInt(req.params.id), {
    attributes: ['id', 'name', 'email']
  })
  if(!user)
    return res.status(404).send('User not found!');
  res.send(user);
})

//delete instant of user
router.delete('/:id', async (req, res) => {
  const user = await models.User.findByPk(parseInt(req.params.id));
  if(!user)
    return res.status(404).send('User not found!');
  await user.destroy()
  res.send('Ok');
})

router.put('/:id', async (req, res) => {
  const user = await models.User.findByPk(parseInt(req.params.id));
  if(!user)
    return res.status(404).send('User not found!');
  const obj = req.body;
  const { error } = validate(obj);
  if(error)
    return res.status(400).send(error.details[0].message);
  let entry  = await models.User.findOne({ where: { email: obj.email } })
  if(entry && parseInt(req.params.id) !== entry.id)
    return res.status(400).send('Email was used!');
    entry = await models.User.findOne({ where: { phoneNumber: obj.phoneNumber }})
  if(entry && parseInt(req.params.id) !== entry.id)
    return res.status(400).send('Phone number was used!')
  res.send(await user.update(obj));
})

//create user
router.post('/', async (req, res) => {
  const obj = req.body;
  const { error } = validate(obj);
  if(error)
    return res.status(400).send(error.details[0].message);
  let user = await models.User.findOne({ where: { email: obj.email } })
  if(user)
    return res.status(400).send('Email was used!');
  user = await models.User.findOne({ where: { phoneNumber: obj.phoneNumber }})
  if(user)
    return res.status(400).send('Phone number was used!')
  user = await models.User.create(obj);
  res.send(_.pick(user, 'name', 'email'));
})

module.exports = router;
