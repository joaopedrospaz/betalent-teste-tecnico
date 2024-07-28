import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Sales from '#models/sale'
export default class extends BaseSeeder {
  async run() {
    await Sales.createMany([
      {
        customerId: 3,
        totalPrice: 999.99,
      },
      {
        customerId: 2,
        totalPrice: 1699.98,
      },
      {
        customerId: 1,
        totalPrice: 1699.98,
      },
      {
        customerId: 1,
        totalPrice: 2099.99,
      },
      {
        customerId: 1,
        totalPrice: 999.99,
      },
    ])
  }
}
