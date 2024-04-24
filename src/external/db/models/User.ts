import { DataTypes } from "sequelize";
import sequelize from "../db";

export const Users = sequelize.define(
  'users',
  {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: false
    },
    nome: {
      type: DataTypes.STRING,

    },
    email: {
      type: DataTypes.STRING,

    },
    senha: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  }
)