const models = require('../models/user');
const Joi = require('joi');

function validate(user) {
    const schema = {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      birthday: Joi.date().required(),
      address: Joi.string().required(),
      gender: Joi.string(),
      email_verified_at: Joi.date(),
      phoneNumber: Joi.string().required()
        .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
      password: Joi.string().required().regex(/(?=.{8,})/)
    }
    return Joi.validate(user, schema);
}

module.exports.validate = validate;