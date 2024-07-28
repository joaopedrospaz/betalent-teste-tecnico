import { HttpContext } from '@adonisjs/core/http'
import { NextFn } from '@adonisjs/core/types/http'
import { verifyToken } from '../utils/jwt_funcitons.js'
import { Exception } from '@adonisjs/core/exceptions'

export default class AuthTokenMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const token = ctx.request.header('Authorization')
    if (!token) throw new Exception('Token not found', { status: 401 })
    try {
      verifyToken(token)
      return next()
    } catch (error) {}
    throw new Exception('Invalid token', { status: 401 })
  }
}
