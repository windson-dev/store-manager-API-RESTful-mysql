const { salesService } = require('../services');

const createSales = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.insertNewSales(sales);

  if (type) return res.status(404).json({ message });
  
  return res.status(201).json({
    id: 3,
    itemsSold: sales,
  });
};

const listSales = async (_req, res) => {
  const { type, message } = await salesService.findAll();
  if (type) return res.status(404).send(message);
  res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findSaleId(id);
  if (type) return res.status(404).json({ message: 'Sale not found' });
  res.status(200).json(message);
};  

module.exports = {
  createSales,
  listSales,
  getSalesById,
};