import vine from '@vinejs/vine'

export const createAddressValidator = vine.compile(
  vine.object({
    customerId: vine.number(),
    street: vine.string(),
    number: vine.string(),
    neighborhood: vine.string(),
    city: vine.string(),
    state: vine.string(),
    zipCode: vine.string(),
  })
)
