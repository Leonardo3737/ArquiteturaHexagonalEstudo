import CripoProvider from "@/core/providers/CripoProvider";
import bcrypt from 'bcrypt'

export default class CriptoAdapter implements CripoProvider{
  exec(senha: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(senha, salt)
  }
  compare(password: string, criptoPassord: string): boolean {
    return bcrypt.compareSync(password, criptoPassord)
  }
}