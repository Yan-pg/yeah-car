import { inject, injectable } from 'tsyringe';

import { ICategoriesReposity } from '../../repositories/ICategoriesReposity';

interface IResquest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesReposity,
  ) {}

  async execute({ description, name }: IResquest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
