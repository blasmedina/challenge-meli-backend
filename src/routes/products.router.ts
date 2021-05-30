import Router from 'express';
import { ProductsController } from '../controllers/products.controller';

const ProductsRouter = Router();

ProductsRouter.route('/:searchInput').get(ProductsController.findProduct);
ProductsRouter.route('/search/:searchInput').get(ProductsController.findProducts);

export default ProductsRouter;
