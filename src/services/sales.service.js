const salesModels = require('../models/sales.models');
const productModel = require('../models/products.models');

const insertNewSales = async (sales) => {
  const productData = await productModel.findAll();
  const productDataId = productData.map(({ id }) => id);
  const result = sales.every(({ productId }) => productDataId.includes(productId));

  if (result) {
    await salesModels.insertSaleProducts(sales);
    return { type: null, message: 'Sucess' };
  }
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const findAll = async () => {
  const sales = await salesModels.allProductsSales();
  return { type: null, message: sales };
};

const findSaleId = async (id) => {
  const sales = await salesModels.allProductsSalesId(id);
  if(!sales.length) return { type: 'SALE_NOT_FOUND', message: sales };
  return { type: null, message: sales };
};


module.exports = {
  insertNewSales,
  findAll,
  findSaleId,
};