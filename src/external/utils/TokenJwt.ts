import IUser from "@/core/shared/interfaces/IUser";
import jwt, { JwtPayload } from 'jsonwebtoken'

export default class TokenJwt {

  constructor(
    private key: string
  ) {}

  generate(user: IUser): string {
    return jwt.sign(user, this.key, {
      expiresIn: '1d'
    })
  }

  verify(token: string): string | JwtPayload {
    return jwt.verify(token, this.key)
  }
}