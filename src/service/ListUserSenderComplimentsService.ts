import { getCustomRepository } from 'typeorm'
import { ComplimentRespositories } from '../repositories/ComplimentRepositories'

export class ListUserSenderComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentRespositories)

    const compliments = complimentsRepository.find({
      where: {
        user_sender: user_id
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments
  }
}
