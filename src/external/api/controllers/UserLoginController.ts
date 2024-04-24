import { Express, Response, Request } from 'express'
import UserLogin from "@/core/services/UserLogin";
import TokenJwt from '@/external/utils/TokenJwt';

export default class UseroginController {
  constructor (
    app: Express,
    userLogin: UserLogin,
  ) {
    app.post('/login', async (req: Request, res: Response)=> {
      try {
        const user = await userLogin.exec(req.body)
        const token = new TokenJwt(process.env.JWT_SECRET!)
        res.status(200).send({user, token: token.generate(user)})
      }
      catch (err: any) {
        res.status(400).send(err.message)
      }
    })
  }

}