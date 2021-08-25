import { container } from 'tsyringe';

import { UsersReposity } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { ICategoriesReposity } from '../../modules/cars/repositories/ICategoriesReposity';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/ CategoryRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesReposity>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUserRepository>('UsersRepository', UsersReposity);
