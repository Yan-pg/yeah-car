import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private lisCategoriesUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.lisCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoryController };
