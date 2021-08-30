import { Category } from '../../entities/Category';
import {
  ICategoriesReposity,
  ICreateCategoryDTO,
} from '../ICategoriesReposity';

class CategoriesRepositoryInMemory implements ICategoriesReposity {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);
    console.log(category);
    return category;
  }
  async list(): Promise<Category[]> {
    const list = this.categories;
    return list;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    console.log(category);
  }
}

export { CategoriesRepositoryInMemory };
