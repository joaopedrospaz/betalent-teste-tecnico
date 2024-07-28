import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'
export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        name: 'Apple iPhone 15 pro max',
        description: 'Description iPhone 15 pro max',
        price: 999.99,
      },
      {
        name: 'Samsung Galaxy S24',
        description: 'Description Samsung Galaxy S24',
        price: 849.99,
      },
      {
        name: 'Nokia 00',
        description: 'Description Nokia 00',
        price: 2099.99,
      },
    ])
  }
}
