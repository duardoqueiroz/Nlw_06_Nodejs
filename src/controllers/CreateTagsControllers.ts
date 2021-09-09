import { Request, Response } from 'express'
import { CreateTagService } from '../service/CreateTagService'

class CreateTagsControllers {
  async handle(req: Request, res: Response) {
    const { name } = req.body
    const createTagService = new CreateTagService()
    const tag = createTagService.execute({ name })

    return res.json(tag)
  }
}

export { CreateTagsControllers }
