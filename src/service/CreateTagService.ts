import { TagRepositories } from '../repositories/TagRepositories'
import { getCustomRepository } from 'typeorm'
import { CreateUserService } from '../service/CreateUserService'

interface ITagsRequest {
  name: string
}

class CreateTagService {
  async execute({ name }: ITagsRequest) {
    const tagRepositories = getCustomRepository(TagRepositories)

    if (!name) {
      throw new Error('Name is invalid')
    }

    const alreadyExists = await tagRepositories.findOne({
      name
    })

    if (alreadyExists) {
      throw new Error('Tag already exists')
    }

    const tag = tagRepositories.create({
      name
    })

    await tagRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }
