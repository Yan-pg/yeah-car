import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserCase } from './AuthenticateUseCase';

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserCase);

    const token = await authenticateUserUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { AuthenticateController };
