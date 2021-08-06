import { Category } from '../../model/Category';
import { ICategoriesReposity } from '../../repositories/ICategoriesReposity';

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesReposity) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
