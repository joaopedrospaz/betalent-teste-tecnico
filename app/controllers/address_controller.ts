import type { HttpContext } from '@adonisjs/core/http'
import { createAddressValidator } from '#validators/address'
import Address from '#models/address'

export default class AdressController {
  async store({ request, response }: HttpContext) {
    const newAddress = await request.validateUsing(createAddressValidator)
    const created = await Address.create(newAddress)
    response.created(created)
  }
}
