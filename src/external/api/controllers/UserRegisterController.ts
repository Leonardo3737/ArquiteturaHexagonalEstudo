import UserRegister from '@/core/services/UserRegister';
import IUser from '@/core/shared/interfaces/IUser';
import { Express, Request, Response } from 'express'

export default class UserRegisterController {
  constructor (
    app: Express,
    userRegister: UserRegister
  ) {
    app.post('/user', async(req: Request<any, any, IUser>, res: Response)=> {
      try {
        await userRegister.exec(req.body)
        res.status(200).send('usuario criado com sucesso')
      } catch(err: any) {
        res.status(400).send(err.message)
      }
    })
  }
}