import app from './index';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

describe('Resource Index', () => {
  it('I am alive', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty('startedAt');
  });
});

describe('Error control', () => {
  it('Not Found', async () => {
    const res = await request(app).get('/recurso-no-existente');
    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toHaveProperty('name');
    expect(res.body.error).toHaveProperty('message');
  });
});

describe('Resource Products', () => {
  it('Get product', async () => {
    const productId = 'MLA918189869';
    const res = await request(app).get(`/products/${productId}`);
    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty('autor');
    expect(res.body).toHaveProperty('item');
    expect(res.body.item).toHaveProperty('id');
    expect(res.body.item).toHaveProperty('title');
    expect(res.body.item).toHaveProperty('price');
    expect(res.body.item).toHaveProperty('picture');
    expect(res.body.item).toHaveProperty('condition');
    expect(res.body.item).toHaveProperty('free_shipping');
    expect(res.body.item).toHaveProperty('sold_quantity');
    expect(res.body.item).toHaveProperty('description');
  });

  it('Search products', async () => {
    const searchInput = 'perros';
    const res = await request(app).get(`/products/search/${searchInput}`);
    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty('autor');
    expect(res.body).toHaveProperty('items');
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.items.length).toBeGreaterThanOrEqual(0);
    expect(res.body.items.length).toBeLessThanOrEqual(4);
    expect(res.body.items[0]).toHaveProperty('id');
    expect(res.body.items[0]).toHaveProperty('title');
    expect(res.body.items[0]).toHaveProperty('price');
    expect(res.body.items[0]).toHaveProperty('picture');
    expect(res.body.items[0]).toHaveProperty('condition');
    expect(res.body.items[0]).toHaveProperty('free_shipping');
  });
});
