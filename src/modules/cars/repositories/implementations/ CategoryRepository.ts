import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesReposity,
  ICreateCategoryDTO,
} from '../ICategoriesReposity';

// singleton

class CategoriesRepository implements ICategoriesReposity {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const cateogory = this.repository.create({
      description,
      name,
    });

    await this.repository.save(cateogory);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
