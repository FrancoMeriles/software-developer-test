const request = require('supertest');
const axios = require('axios');
const app = require('../../src/application/app');
const querySuccess = require('./data/querySuccess.json');
const itemSuccess = require('./data/itemSuccess.json');

const getQuery = require('./stub/getQuery.json');
const getItemData = require('./stub/getItemData.json');
const getItemDescription = require('./stub/getItemDescription.json');

jest.mock('axios');

describe('Test the items API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('/items', () => {
    test("It should respond 400 when we don't send a query", async () => {
      const response = await request(app).get('/api/items');
      expect(response.statusCode).toBe(400);
    });
    test('It should respond 200 when we send a query', async () => {
      axios.get.mockResolvedValue({ data: getQuery });
      const response = await request(app).get('/api/items?q=iphone');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(querySuccess);
    });
  });
  describe('/items/:id', () => {
    test("It should respond 400 when we don't send an id", async () => {
      const response = await request(app).get('/api/items/');
      expect(response.statusCode).toBe(400);
    });
    test('It should respond 200 when we send a item id', async () => {
      axios.get
        .mockReturnValueOnce({ data: getItemData })
        .mockReturnValueOnce({ data: getItemDescription });
      const response = await request(app).get('/api/items/MLA870238563');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(itemSuccess);
    });
  });
});
