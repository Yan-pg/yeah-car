import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreteUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersReposity')
    private usersRepository: IUserRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User alredy exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
