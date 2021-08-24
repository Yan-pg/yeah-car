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
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UsersReposity };
