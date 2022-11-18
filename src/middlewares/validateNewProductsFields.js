const Joi = require('joi');

module.exports = (req, _res, next) => {
  let status = 422;
    const { error } = Joi.object({
    name: Joi.string().min(5).required().messages({
      'any.required': '"name" is required',
      'any.length': '"name" length must be at least 5 characters long', 
    }),
  }).validate(req.body);
  
  if (error) {
    if (error.details[0].type === 'any.required') {
      status = 400;
    }
    return next({
      message: error.message,
      status,
    });
  }

  return next();
};
