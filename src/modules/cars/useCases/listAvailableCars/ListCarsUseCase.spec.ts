import { CarsReposityInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsReposityInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsReposityInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('Shold be able list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Carro com espaço',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Audi A1',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.excute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Carro com espaço',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.excute({
      brand: 'Car_brand',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Carro com espaço',
      daily_rate: 110.0,
      license_plate: 'DEF-12345',
      fine_amount: 40,
      brand: 'car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.excute({
      name: 'Car3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Carro com espaço',
      daily_rate: 110.0,
      license_plate: 'DEF-12345',
      fine_amount: 40,
      brand: 'car_brand_test',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.excute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
