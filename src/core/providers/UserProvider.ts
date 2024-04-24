import IUser from "@/core/shared/interfaces/IUser";
import { Model } from "sequelize";

export default interface UserProvider {
  register(user: IUser): void
  find(email: string): Promise<Model[]>
}