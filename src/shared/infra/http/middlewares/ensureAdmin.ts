import { NextFunction, Request, Response } from 'express';

import { UsersReposity } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureAdmin(
  request: Request,
  reponse: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersReposity();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User ins't admin!");
  }

  return next();
}
