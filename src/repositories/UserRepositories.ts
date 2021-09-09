import { EntityRepository, Repository } from 'typeorm'
import { Users } from '../entities/Users'

@EntityRepository(Users)
class UserRepositories extends Repository<Users> {}

export { UserRepositories }
