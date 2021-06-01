import axios from 'axios';
import { FindProductResponse, FindProductsResponse, ProductDescriptionResponse } from '../interfaces/api-meli';

const config = {
  baseURL: process.env.API_MELI_ENDPOINT,
  timeout: parseInt(process.env.API_MELI_TIMEOUT || '1000', 10),
};

const apiMeliInstance = axios.create(config);

export class ApiMeliService {
  static async findProducts(query: string): Promise<FindProductsResponse.RootObject> {
    const { data } = await apiMeliInstance.get('/sites/MLA/search', { params: { q: query } });
    return data;
  }

  static async findProduct(id: string): Promise<FindProductResponse.RootObject> {
    const { data } = await apiMeliInstance.get(`/items/${id}`);
    return data;
  }

  static async findProductDescription(id: string): Promise<ProductDescriptionResponse.RootObject> {
    const { data } = await apiMeliInstance.get(`/items/${id}/description`);
    return data;
  }
}
