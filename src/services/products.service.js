const { productsModel } = require('../models');
const { validateId } = require('./validations/validateInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productsId) => {
  const error = validateId(productsId);

  if (error.type) return error;

  const products = await productsModel.findById(productsId);
  if (!products) return { type: 'PRODUCT_NOT_FOUND', message: products };
  return { type: null, message: products };
};

module.exports = {
  findAll,
  findById,
};