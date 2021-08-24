import { ICreateUserDTO } from '../dtos/ICreteUserDTO';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
