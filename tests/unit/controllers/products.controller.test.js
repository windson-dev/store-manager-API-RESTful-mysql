const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;

const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');

describe('Testes do Controller Products', () => {
  afterEach(sinon.restore);
  
  it('Testa se é possivel listar todos os produtos', async () => {
    const req = {};
    const res = {};
    const statusResponse = 200;
    const product = [{ id: 1, name: 'Martelo de Thor' }];
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findAll').resolves({ type: null, message: product });
    await productsController.listProduct(req, res);

    expect(res.status).to.have.been.calledWith(statusResponse);
    expect(res.json).to.have.been.calledWith(product);
  });
  
  it('Testa se é possivel procurar um produto pelo seu ID', async () => {
    const req = {
      params: { id: 1 },
      body: {},
    };
    const res = {};
    const statusResponse = 200;
    const product = [{ id: 1, name: 'Martelo de Thor' }];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findById').resolves({ type: null, message: product });
    await productsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(statusResponse);
    expect(res.json).to.have.been.calledWith(product);
    });

    it('Testa se é possivel alterar um produto', async () => {
      const req = {
        params: { id: 1 },
        body: {},
      };
      const res = {};
      const statusResponse = 200;
      const product = [{ id: 1, name: 'Martelo de Thor' }];
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'updateProductById').resolves({ type: null, message: product });
      await productsController.updateProductData(req, res);

      expect(res.status).to.have.been.calledWith(statusResponse);
      expect(res.json).to.have.been.calledWith(product);
    });
  });