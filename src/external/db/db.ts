import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_DATABASE!, process.env.DB_USER!, process.env.DB_PASSWORD, {
  dialect: 'postgres'
})

export default sequelize
