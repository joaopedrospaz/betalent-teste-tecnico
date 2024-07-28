import Jwt from 'jsonwebtoken'
import Ijwt from './interfaces/jwt_interface.js'

const JWT_SECRET = process.env.JWT_SECRET || 'segredo'
const CONFIG_JWT: Jwt.SignOptions = { algorithm: 'HS256', expiresIn: '5d' }
const createToken = (payload: Ijwt) => {
  const result = Jwt.sign(payload, JWT_SECRET, CONFIG_JWT)
  return result
}
const verifyToken = (token: string) => Jwt.verify(token, JWT_SECRET)

export { createToken, verifyToken }
