const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;

const connection = require('../../../src/models/connection');
const productsModels = require('../../../src/models/products.models');

describe('Testes do Models Products', () => {
  afterEach(sinon.restore);

  it('Testa se é possivel listar todos os produtos', async () => {
    const product = { id: 1, name: 'Martelo de Thor' };

    sinon.stub(connection, 'execute').resolves([product]);

    const result = await productsModels.findAll();
    expect(result).to.be.deep.equal(product);
  });

  it('Testa se é possivel procurar um produto pelo seu ID', async () => {
    const product = { id: 1, name: 'Martelo de Thor' };
    
    sinon.stub(connection, 'execute').resolves([[product]]);

    const result = await productsModels.findById(1);
    expect(result).to.be.deep.equal(product);
  });

  it('Testa se é possivel inserir um novo produto', async () => {
    const newProduct = [{
      id: 1,
      name: 'Martelo de Thor',
    }]; 

    sinon.stub(connection, 'execute').resolves([{ insertId: newProduct}]);
    const result = await productsModels.insert(newProduct);

    expect(result).to.be.equal(newProduct); 
  });  
});