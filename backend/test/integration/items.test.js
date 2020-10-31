const request = require('supertest');
const app = require('../../src/application/app');
const itemSuccess = require('./data/itemSuccess.json');
const querySuccess = require('./data/querySuccess.json');

describe('Test the items API', () => {
  describe('/items', () => {
    test("It should respond 400 when we don't send a query", async () => {
      const response = await request(app).get('/api/items');
      expect(response.statusCode).toBe(400);
    });
    test('It should respond 200 when we send a query', async () => {
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
      const response = await request(app).get('/api/items/MLA870238563');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(itemSuccess);
    });
  });
});
