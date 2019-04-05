const Joi = require('joi');
const models = require('../models');

async function validateInput(req, res, next) {
    const obj = req.body;
    const { error } = validate(obj);
    if(error)
        return res.status(400).send(error.details[0].message);
    const remind = await models.remind.findByPk(obj.remind_id);
    const type = await models.typeNotification.findByPk(obj.type_id);
    if(!remind || !type)
        return res.status(404)
            .send(!remind ? 'Remind not found!' : 'Type of Notification not found!');
    next();
}

function validate(notification) {
    const schema = {
        title: Joi.string().required(),
        content: Joi.string().required(),
        type_id: Joi.number().required(),
        remind_id: Joi.number().required(),
        deadline: Joi.date()
    }

    return Joi.validate(notification, schema);
}

exports.validInput = validateInput;