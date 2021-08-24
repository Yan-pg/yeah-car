import { ICreateUserDTO } from '../dtos/ICreteUserDTO';
import { User } from '../entities/User';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUserRepository };
