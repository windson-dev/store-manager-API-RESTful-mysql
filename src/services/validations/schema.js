const joi = require('joi');

const idSchema = joi.number().integer().min(1).required();
const productsSchema = joi.object({
  name: joi.string().min(3).required(),
});

module.exports = {
  idSchema,
  productsSchema,
};