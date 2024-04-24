import IUser from "@/core/shared/interfaces/IUser";
import UseCase from "../shared/UseCase";
import UserProvider from "../providers/UserProvider";
import PasswordCripoProvider from "../providers/CripoProvider";
import UuidProvider from "../providers/UuidProvider";

export default class UserRegister implements UseCase<IUser, void> {
  constructor(
    private userRegister: UserProvider,
    private uuid: UuidProvider,
    private cripto: PasswordCripoProvider
  ) { }
  async exec(props: IUser): Promise<void> {
    if ((await this.userRegister.find(props.email)).length) throw new Error('Email ja cadastrado')
    
    const passwordCripto = this.cripto.exec(props.senha!)
    const Uuid = this.uuid.generate()
    this.userRegister.register({...props, senha: passwordCripto, uuid: Uuid})
  }
}