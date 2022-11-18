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

module.exports = {
  createSales,
};