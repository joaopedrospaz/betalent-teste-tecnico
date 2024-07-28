import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3),
    description: vine.string().optional(),
    image: vine.string().optional(),
    price: vine.number(),
  })
)

export const updateProductValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).optional(),
    description: vine.string().optional(),
    image: vine.string().optional(),
    price: vine.number().optional(),
  })
)
