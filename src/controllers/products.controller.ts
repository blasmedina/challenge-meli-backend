import { Request, Response, NextFunction } from 'express';
import ProductsRepository from '../repositories/products.repository';

const autor = {
  name: 'Blas',
  lastname: 'Medina',
};

export class ProductsController {
  static async findProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { searchInput } = req.params;
      const data = await ProductsRepository.findProducts(searchInput);
      return res.json({ autor, ...data });
    } catch (error) {
      next(error);
    }
  }

  static async findProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { searchInput } = req.params;
      const item = await ProductsRepository.findProduct(searchInput);
      return res.json({ autor, item });
    } catch (error) {
      next(error);
    }
  }
}
