import { ApiMeliService } from '../services/api-meli.service';

const getPriceObject = (currency_id: string, price: number) => {
  return {
    currency: currency_id,
    amount: price,
    decimals: 0,
  };
};

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
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
    } = productResponse;

    const { plain_text: description } = descriptionResponse;

    return {
      id,
      title,
      price: getPriceObject(currency_id, price),
      picture: pictures[0].url,
      condition,
      free_shipping,
      sold_quantity,
      description,
    };
  }

  static async findProducts(query: string, limit = 4) {
    const response = await ApiMeliService.findProducts(query);

    const categories = response.filters
      .filter((filter) => filter.id === 'category')[0]
      .values[0].path_from_root.map((category) => category.name);

    const items = response.results
      .slice(0, limit)
      .map(({ id, title, price, currency_id, thumbnail: picture, condition, shipping: { free_shipping } }) => ({
        id,
        title,
        price: getPriceObject(currency_id, price),
        picture,
        condition,
        free_shipping,
      }));

    return { categories, items };
  }
}
