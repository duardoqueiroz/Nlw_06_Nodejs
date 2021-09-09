import { Request, Response } from 'express'
import { ListUsersService } from '../service/ListUsersService'

export class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService()

    const users = await listUsersService.execute()

    return res.json(users)
  }
}