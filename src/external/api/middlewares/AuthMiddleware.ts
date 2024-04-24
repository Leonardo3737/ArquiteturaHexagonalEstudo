import UserProvider from '@/core/providers/UserProvider';
import IUser from '@/core/shared/interfaces/IUser';
import TokenJwt from '@/external/utils/TokenJwt';
import {Request, Response, NextFunction} from 'express'

export default function Auth(db: UserProvider) {
  return async (req: Request, res: Response, next: NextFunction)=> {
    const danied = () => res.status(403).send('Token Inválido')
    const token = req.headers.authorization?.replace('Bearer ', '')

    if(!token) {
      danied();
      return
    }

    const jwt = new TokenJwt(process.env.JWT_SECRET!)
    const userToken = jwt.verify(token) as IUser
    const user = await db.find(userToken.email)

    if(!user) {
      danied();
      return
    }

    (req as any).user = user
    next()
  }
}