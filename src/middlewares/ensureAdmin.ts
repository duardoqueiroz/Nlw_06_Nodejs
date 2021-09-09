import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { Users } from '../entities/Users'
import { UserRepositories } from '../repositories/UserRepositories'

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req

  const userRepositories = getCustomRepository(UserRepositories)

  const { admin } = (await userRepositories.findOne(user_id)) as Users

  if (admin) {
    return next()
  } else {
    return res.status(401).end()
  }
}
