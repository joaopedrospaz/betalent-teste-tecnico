import type { HttpContext } from '@adonisjs/core/http'
import Sale from '#models/sale'
import Product from '#models/product'
import Customer from '#models/customer'
import { Exception } from '@adonisjs/core/exceptions'
import { createSaleValidator } from '#validators/sale'

export default class ProductsController {
  async store({ request, response }: HttpContext) {
    const productsPayload = request.input('products')
    if (!productsPayload)
      throw new Exception(`Products is required and must be an array.`, { status: 400 })
    const products = JSON.parse(productsPayload)
    if (products.length === 0) throw new Exception(`Products is required .`, { status: 400 })
    const customerId = request.input('customerId')

    const newSale = await createSaleValidator.validate({ products, customerId })
    const customer = await Customer.find(newSale.customerId)
    if (!customer) throw new Exception(`Customer not found.`, { status: 404 })

    let total = 0
    await Promise.all(
      newSale.products.map(async (product) => {
        const findProduct = await Product.find(product.productId)
        if (!findProduct) throw new Exception(`Product not found.`, { status: 404 })
        total += +findProduct.price * product.quantity
      })
    )

    const sale = await Sale.create({
      customerId: customer.id,
      totalPrice: total,
    })

    await Promise.all(
      newSale.products.map(async (product) => {
        await sale.related('products').attach({
          [product.productId]: {
            quantity: product.quantity,
          },
        })
      })
    )

    await sale.load('products')
    return response.created(sale)
  }
}
