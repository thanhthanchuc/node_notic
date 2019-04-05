const { validate } = require('../services/user');
const models = require('../models');

async function validateUserInput(req, res, next) {
    const obj = req.body;
    const { error } = validate(obj);
    if(error)
        return res.status(400).send(error.details[0].message);
    let entry  = await models.User.findOne({ where: { email: obj.email } })
    if(entry && parseInt(req.params.id) !== entry.id)
        return res.status(400).send('Email was used!');
        entry = await models.User.findOne({ where: { phoneNumber: obj.phoneNumber }})
    if(entry && parseInt(req.params.id) !== entry.id)
        return res.status(400).send('Phone number was used!');
    next();
}

module.exports.validInput = validateUserInput;