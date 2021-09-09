import { Request, Response } from 'express'
import { ListTagsService } from '../service/ListTagsService'

export class ListTagsController {
  async handle(req: Request, res: Response) {
    const listTagsService = new ListTagsService()

    const tags = listTagsService.execute()

    return res.json(tags)
  }
}
