import { Express, Response, Request } from "express";

export default class GetUserController {
  constructor(
    app: Express,
    ...middlewares: any[]
  ) {
    app.get('/user', ...middlewares, (req: Request, res: Response)=> {
      try {
        res.status(200).send((req as any).user)
      }
      catch(err: any) {
        res.status(500).send(err.message)
      }
    }) 
  }
  
}