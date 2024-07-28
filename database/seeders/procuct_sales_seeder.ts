import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProductSale from '#models/product_sale'
export default class extends BaseSeeder {
  async run() {
    await ProductSale.createMany([
      { productId: 1, saleId: 1, quantity: 1 },
      { productId: 2, saleId: 2, quantity: 2 },
      { productId: 1, saleId: 2, quantity: 1 },
      { productId: 2, saleId: 3, quantity: 2 },
      { productId: 3, saleId: 4, quantity: 1 },
      { productId: 1, saleId: 5, quantity: 1 },
    ])
  }
}
