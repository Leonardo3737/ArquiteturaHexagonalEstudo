import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import UserRegister from './core/services/UserRegister'
import UserAdapter from './external/adapter/UserAdapter'
import UserRegisterController from './external/api/controllers/UserRegisterController'
import CriptoAdapter from './external/adapter/CriptoAdapter'
import UserLoginController from './external/api/controllers/UserLoginController'
import UserLogin from './core/services/UserLogin'
import UuidAdapter from './external/adapter/UuidAdapter'
import GetUserController from './external/api/controllers/GetUserController'
import Auth from './external/api/middlewares/AuthMiddleware'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(process.env.PORT, () => {
	console.log('servidor rodando na porta: ' + process.env.PORT);
})

//adaptadores
const db = new UserAdapter()
const cripto = new CriptoAdapter()
const uuid = new UuidAdapter()

//casos de uso
const userRegister = new UserRegister(db, uuid, cripto)
const userLogin = new UserLogin(db, cripto)

//Rotas abertas
new UserRegisterController(app, userRegister)
new UserLoginController(app, userLogin)


//Rotas protegidas
app.use(Auth(db))
new GetUserController(app)