import { compare } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'
import { sign } from 'jsonwebtoken'
interface IAuthenticateUserService {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    const userRepositories = getCustomRepository(UserRepositories)
    const user = await userRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error('Email/Password Incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password Incorrect')
    }

    const token = sign(
      {
        email: user.email
      },
      '29cb87c2a6c707873c1a11ee8e4a34c0',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}
