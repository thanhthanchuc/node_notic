const express = require('express');
const router = express.Router();
const models = require('../models');
const { validInput } = require('../middlewares/notification');
const _ = require('underscore');

router.get('/', async (req, res) => {
    const query = { limit: req.params.limit, offset: req.params.offset };
    res.send(await models.notification.findAll(query));
})

router.post('/', validInput, async (req, res) => {
    const notification = await models.notification.create(req.body);
    res.send(_.omit(notification.dataValues, ['id']));
})

router.get('/:id', async (req, res) => {
    const notification = await models.notification.findByPk(parseInt(req.params.id));
    if(!notification)
        return res.status(404).send('Notification not found!');
    res.send(notification);
})

router.put('/:id', validInput, async (req, res) => {
    const notification = await models.notification.findByPk(parseInt(req.params.id));
    if(!notification)
        return res.status(404).send('Notification not found!');
    res.send(await notification.update(req.body));
})

router.delete('/:id', async (req, res) => {
    const notification = await models.notification.findByPk(parseInt(req.params.id));
    if(!notification)
        return res.status(404).send('Notification not found!');
    await notification.destroy();
    res.send('Ok');
})

module.exports = router;