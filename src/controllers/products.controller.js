const { productsService } = require('../services');

const listProduct = async (_req, res) => {
  const { type, message } = await productsService.findAll();
  if (type) return res.status(404).json(message);
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(404).send({ message: 'Product not found' });
  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);
  if (type) return res.status(404).json(message);
  res.status(201).json(message);
};

const updateProductData = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { type, message } = await productsService.updateProductById(id, body);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = {
  listProduct,
  getProduct,
  createProduct,
  updateProductData,
};