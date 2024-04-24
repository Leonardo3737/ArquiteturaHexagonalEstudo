import UseCase from "../shared/UseCase";
import IUser from "../shared/interfaces/IUser";
import UserProvider from "../providers/UserProvider";
import CripoProvider from "../providers/CripoProvider";
import { Model } from "sequelize";

export interface Login {
  email: string;
  password: string;
}

export interface Loged {
  user: IUser;
  token: string;
}

export default class UserLogin implements UseCase<Login, Promise<IUser>> {

  constructor(
    private userProvider: UserProvider,
    private criptoProvider: CripoProvider
  ) {}

  async exec(props: Login) {
    const auxUser: Model[] = await this.userProvider.find(props.email)
    if (!auxUser.length) throw new Error('Email não cadastrado')

    const loged: boolean = this.criptoProvider.compare(props.password, auxUser[0].dataValues.senha)
    if (!loged) throw new Error('Senha Incorreta')
    return {...auxUser[0].dataValues, senha: undefined}
  }
}