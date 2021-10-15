import { CarsReposityInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarsUseCase } from './createCarsUseCase';

let createCarsUseCase: CreateCarsUseCase;
let carsRepositoryInMemory: CarsReposityInMemory;

describe('Crete car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsReposityInMemory();
    createCarsUseCase = new CreateCarsUseCase(carsRepositoryInMemory);
  });

  it('shold be anble to create a new car', async () => {
    const car = await createCarsUseCase.execute({
      name: 'Name car',
      description: 'Description car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    expect(car).toHaveProperty('id');
  });

  it('shoul not be able to create a car if with exists license plate', () => {
    expect(async () => {
      await createCarsUseCase.execute({
        name: 'Name car',
        description: 'Description car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      });

      await createCarsUseCase.execute({
        name: 'Name car',
        description: 'Description car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('shoul not be able to create a car if with available true by default', async () => {
    const car = await createCarsUseCase.execute({
      name: 'Car Available',
      description: 'Description car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    expect(car.available).toBe(true);
  });
});
