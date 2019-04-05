const express = require('express');
const router = express.Router();
const _ = require('underscore');
const models = require('../models'); 
const { validInput } = require('../middlewares/user');

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
  if (!user)
        return res.status(404).send('User not found!');
  if(!user)
    return res.status(404).send('User not found!');
  await user.destroy()
  res.send('Ok');
})

router.put('/:id', validInput, async (req, res) => {
  const user = await models.User.findByPk(parseInt(req.params.id));
  if(!user)
    res.status(404).send('User not found!')
  res.send(await user.update(req.body));
})

//create user
router.post('/', validInput, async (req, res) => {
  const user = await models.User.create(req.body);
  res.send(_.pick(user, 'name', 'email'));
})

module.exports = router;
