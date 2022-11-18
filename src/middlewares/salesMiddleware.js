const Joi = require('joi');

const validateStatus = (type) => {
  if (type === 'number.min') {
    return 422;
  }
  return 400;
};

const salesMiddleware = (req, _res, next) => {
  const { error } = Joi.array().items({
    productId: Joi.number().integer().required().messages({
      'any.required': '"productId" is required',
    }),
    quantity: Joi.number().integer().min(1).required()
.messages({
  'any.required': '"quantity" is required',
  'number.min': '"quantity" must be greater than or equal to 1',
    }),
  })
    .validate(req.body);
  if (error) {
    return next({ message: error.message, status: validateStatus(error.details[0].type) });
  }
  return next();
};

module.exports = {
  salesMiddleware,
};
