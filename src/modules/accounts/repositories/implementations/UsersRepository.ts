import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreteUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UsersReposity implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UsersReposity };
