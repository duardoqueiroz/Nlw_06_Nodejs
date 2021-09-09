import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'
import { classToPlain } from 'class-transformer'

export class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UserRepositories)

    const users = usersRepositories.find()

    return classToPlain(users)
  }
}
