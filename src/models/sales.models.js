const camelize = require('camelize');
const connection = require('./connection');

const findAllSale = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return camelize(result);
};

const getLastSale = async () => {
  const [[result]] = await connection.execute(
    'SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1',
  );
  console.log('get last sale', result);
  return result;
};

const insertSale = async () => {
  const date = new Date();
  await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [date],
  );
};

const insertSaleProducts = async (sale) => {
  const { id } = await getLastSale();
  await insertSale();
  await Promise.all(sale.map(({ productId, quantity }) => (
    connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [id + 1, productId, quantity],
    )
  )));
};

module.exports = {
  findAllSale,
  insertSale,
  insertSaleProducts,
};