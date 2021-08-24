import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const lisCategoriesUseCase = container.resolve(ListCategoryUseCase);
    const all = await lisCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoryController };
