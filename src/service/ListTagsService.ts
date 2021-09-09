import { getCustomRepository } from 'typeorm'
import { TagRepositories } from '../repositories/TagRepositories'

export class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagRepositories)

    const tags = tagsRepositories.find()

    return tags
  }
}
