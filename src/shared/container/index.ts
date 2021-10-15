import { container } from 'tsyringe';

import { UsersReposity } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/ CategoryRepository';
import { CarsReposity } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { SpecificationRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ICarRepository } from '@modules/cars/repositories/ICarsReposity';
import { ICategoriesReposity } from '@modules/cars/repositories/ICategoriesReposity';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesReposity>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUserRepository>('UsersRepository', UsersReposity);

container.registerSingleton<ICarRepository>('CarsReposity', CarsReposity);
