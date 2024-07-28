import type { HttpContext } from '@adonisjs/core/http'
import Customer from '#models/customer'
import { Exception } from '@adonisjs/core/exceptions'
import { createCustomerValidator, updateCustomerValidator } from '#validators/customer'

export default class CustomersController {
  async index({}: HttpContext) {
    const allCustomers = await Customer.query()
    return allCustomers
  }

  async show({ params, request }: HttpContext) {
    const id = params.id
    if (!id) throw new Exception(`Id not found.`, { status: 404 })
    const month = request.input('month')
    const year = request.input('year')
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 1)

    const findCustomer = await Customer.query()
      .where('id', id)
      .preload('sales', (query) => {
        if (month && year) {
          query
            .preload('products')
            .orderBy('createdAt', 'desc')
            .whereBetween('createdAt', [startDate, endDate])
        } else {
          query.preload('products').orderBy('createdAt', 'desc')
        }
      })
      .preload('adress')
      .first()

    if (!findCustomer) throw new Exception('Customer not found', { status: 404 })

    return findCustomer
  }

  async store({ request, response }: HttpContext) {
    const newCustomer = await request.validateUsing(createCustomerValidator)
    const existingCustomer = await Customer.query()
      .where('email', newCustomer.email)
      .orWhere('cpf', newCustomer.cpf)
      .orWhere('phone', newCustomer.phone)
      .first()

    if (existingCustomer)
      throw new Exception(`A customer with this Email, CPF, or Phone already exists.`, {
        status: 409,
      })
    const createCustomer = await Customer.create(newCustomer)
    response.created(createCustomer)
  }
  async update({ params, request }: HttpContext) {
    const id = params.id
    if (!id) throw new Exception(`Id not found.`, { status: 404 })
    const existingCustomer = await Customer.find(id)
    if (!existingCustomer) throw new Exception('Customer not found.', { status: 404 })
    const payload = await request.validateUsing(updateCustomerValidator)
    if (Object.keys(payload).length === 0)
      throw new Exception('At least one of the fields (name, email, phone, cpf) must be provided', {
        status: 400,
      })
    const updated = existingCustomer.merge(payload).save()
    return updated
  }
  async delete({ params, response }: HttpContext) {
    const id = params.id
    if (!id) throw new Exception(`Id not found.`, { status: 404 })
    const existingCustomer = await Customer.find(id)
    if (!existingCustomer) throw new Exception('Customer not found.', { status: 404 })
    await existingCustomer.delete()
    return response.status(204)
  }
}
