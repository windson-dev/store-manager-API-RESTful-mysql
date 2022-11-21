const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;

const productsService = require('../../../src/services/products.service');
const productsModels = require('../../../src/models/products.models');

describe('Testes do Services Products', () => {
  afterEach(sinon.restore);

  it('Testa se é possivel listar todos os produtos', async () => {
    const product = { id: 1, name: 'Martelo de Thor' };
    sinon.stub(productsModels, 'findAll').resolves(product);
    const error = await productsService.findAll();
    
    expect(error.type).to.deep.equal(null);
    expect(error.message).to.deep.equal(product);
  });

  it('Testa se é possivel procurar um produto pelo seu ID', async () => {
    afterEach(sinon.restore);
    const product = { id: 1, name: 'Martelo de Thor' }
    sinon.stub(productsModels, 'findAll').resolves(product);
    const error = await productsService.findById(1);

    expect(error.type).to.deep.equal(null);
    expect(error.message).to.deep.equal(product);
  });

  it('Testa se retorna um erro ao procurar por um ID inexistente', async () => {
    sinon.stub(productsModels, 'findById').resolves(null);
    const error = await productsService.findById(1);

    expect(error.type).to.deep.equal('PRODUCT_NOT_FOUND');
    expect(error.message).to.deep.equal(null);
  });
});