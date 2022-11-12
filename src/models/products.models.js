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

const insert = async (products) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [...Object.values(products)],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};
