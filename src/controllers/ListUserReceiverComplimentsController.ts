import { Request, Response } from 'express'
import { ListUserReceiverComplimentsService } from '../service/ListUserReceiverComplimentsService'

export class ListUserReceiverComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    const listUserReceiverComplimentsService =
      new ListUserReceiverComplimentsService()

    const compliments = listUserReceiverComplimentsService.execute(user_id)

    return res.json(compliments)
  }
}
