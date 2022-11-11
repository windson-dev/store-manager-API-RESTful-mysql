const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result);
};

const findById = async (productsId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productsId],
  );
  return camelize(products);
};

module.exports = {
  findAll,
  findById,
};
