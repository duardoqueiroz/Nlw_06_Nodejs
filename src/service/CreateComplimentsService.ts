import { ComplimentRespositories } from '../repositories/ComplimentRepositories'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'

interface IComplimentsRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentsService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message
  }: IComplimentsRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentRespositories)
    const usersRepositories = getCustomRepository(UserRepositories)

    const userReceiverExists = await usersRepositories.findOne(user_receiver)

    if (user_sender === user_receiver) {
      throw new Error('You cannot register a compliment for yourself')
    }

    if (!userReceiverExists) {
      throw new Error('User invalidate')
    }

    const compliment = await complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}
