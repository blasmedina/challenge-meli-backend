import { ApiMeliService } from '../services/api-meli.service';

export default class ProductsRepository {
  static async findProduct(productId: string) {
    const [productResponse, descriptionResponse] = await Promise.all([
      ApiMeliService.findProduct(productId),
      ApiMeliService.findProductDescription(productId),
    ]);
    const {
      id,
      title,
      price,
      currency_id,
      thumbnail: picture,
      condition,
      shipping: { free_shipping },
      sold_quantity,
    } = productResponse;
    const { plain_text: description } = descriptionResponse;
    return {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: 0,
      },
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description,
    };
  }

  static async findProducts(query: string) {
    const response = await ApiMeliService.findProducts(query);
    const categories = ['A', 'B', 'C'];
    const items = response.results
      .slice(0, 4)
      .map(({ id, title, price, currency_id, thumbnail: picture, condition, shipping: { free_shipping } }) => ({
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: 0,
        },
        picture,
        condition,
        free_shipping,
      }));
    return { categories, items };
  }
}
