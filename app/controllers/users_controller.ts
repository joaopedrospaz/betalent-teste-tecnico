import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator, loginValidator } from '#validators/user'
import hash from '@adonisjs/core/services/hash'
import { Exception } from '@adonisjs/core/exceptions'
import { createToken } from '../utils/jwt_funcitons.js'

export default class UsersController {
  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const findUser = await User.findBy('email', email)
    if (!findUser) throw new Exception('Invalid email or password', { status: 401 })
    const verify = await hash.verify(findUser.password, password)
    if (!verify) throw new Exception('Invalid email or password', { status: 401 })
    const { name, id } = findUser
    const token = createToken({ email, name, id })
    return token
  }

  async signup({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const existingUser = await User.findBy('email', payload.email)
    if (existingUser) throw new Exception('Email already exists', { status: 409 })
    const newUSer = await User.create(payload)
    response.created(newUSer)
  }
}
