import IUser from "@/core/shared/interfaces/IUser";
import { Users } from "../db/models/User";
import UserProvider from "@/core/providers/UserProvider";
import { Model } from "sequelize";

export default class UserAdapter implements UserProvider {
  async register(user: IUser) {
    const newUser = Users.build({ ...user })
    await newUser.save()
  }

  async find(email: string): Promise<Model[]> {
    const exist: Model[] = await Users.findAll({
      where: {
        email: email
      }
    })
    return exist
  }
}