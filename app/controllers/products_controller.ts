import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import { Exception } from '@adonisjs/core/exceptions'
import { createProductValidator, updateProductValidator } from '#validators/product'

export default class ProductsController {
  async index({}: HttpContext) {
    const allProducts = await Product.query().orderBy('name')
    return allProducts
  }

  async show({ params }: HttpContext) {
    const id = params.id
    if (!id) throw new Exception(`Id not found.`, { status: 404 })
    const findProduct = await Product.query()
      .where('id', id)
      .preload('sales', (query) => {
        query.select('id', 'customerId', 'createdAt', 'updatedAt')
      })
      .first()
    if (!findProduct) throw new Exception('Product not found', { status: 404 })

    return findProduct
  }

  async store({ request, response }: HttpContext) {
    const newProduct = await request.validateUsing(createProductValidator)
    const createProduct = await Product.create(newProduct)
    response.created(createProduct)
  }

  async update({ params, request }: HttpContext) {
    const id = params.id
    if (!id) throw new Exception(`Id not found.`, { status: 404 })
    const existingProduct = await Product.find(id)
    if (!existingProduct) throw new Exception('Product not found.', { status: 404 })
    const payload = await request.validateUsing(updateProductValidator)
    if (Object.keys(payload).length === 0)
      throw new Exception(
        'At least one of the fields (name, description, image, price) must be provided',
        {
          status: 400,
        }
      )
    const updated = existingProduct.merge(payload).save()
    return updated
  }

  async delete({ params, response }: HttpContext) {
    const id = params.id
    if (!id) throw new Exception(`Id not found.`, { status: 404 })
    const existingProduct = await Product.find(id)
    if (!existingProduct) throw new Exception('Product not found.', { status: 404 })
    await existingProduct.delete()
    return response.status(204)
  }

  async retore({ params }: HttpContext) {
    const product = await Product.onlyTrashed().where('id', params.id)
    if (product.length === 0)
      throw new Exception('Product not found in deleted records', { status: 404 })
    product[0].merge({ deletedAt: null }).save()
    return product
  }
}
