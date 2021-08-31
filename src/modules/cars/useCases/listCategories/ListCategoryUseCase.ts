import { inject, injectable } from 'tsyringe';

import { Category } from '@modules/cars/entities/Category';
import { ICategoriesReposity } from '@modules/cars/repositories/ICategoriesReposity';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesReposity,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
