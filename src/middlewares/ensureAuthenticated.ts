import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayLoad {
  sub: string
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Receive token
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(
      token,
      '29cb87c2a6c707873c1a11ee8e4a34c0'
    ) as IPayLoad

    req.user_id = sub
  } catch (error) {
    return res.status(401).end()
  }

  return next()
}
