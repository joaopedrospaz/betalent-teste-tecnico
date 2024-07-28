import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Customer from './customer.js'
import Product from './product.js'

export default class Sales extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare customerId: number

  @column()
  declare totalPrice: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Customer)
  declare customer: BelongsTo<typeof Customer>

  @manyToMany(() => Product, {
    localKey: 'id',
    pivotForeignKey: 'sale_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'product_id',
  })
  declare products: ManyToMany<typeof Product>
}
