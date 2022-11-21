const { productsModel } = require('../models');
const { validateId, validateProducts } = require('./validations/validateInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productsId) => {
  const error = validateId(productsId);
  if (error.type) return error;

  const products = await productsModel.findById(productsId);
  if (products) return { type: null, message: products };
  return { type: null, message: products };
};

const createProduct = async (name) => {
  const error = validateProducts(name);
  if (error.type) return error;

  const newProductId = await productsModel.insert({ name });
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const updateProductById = async (id, name) => {
  await productsModel.updateProduct(id, name);
  const idProduct = await productsModel.findById(id)
  if (!idProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: idProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProductById,
};