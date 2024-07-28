import vine from '@vinejs/vine'

export const createCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3),
    email: vine.string().email().trim(),
    phone: vine.string().regex(/^\d{2}\d{9}$/),
    cpf: vine.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
  })
)
export const updateCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).optional(),
    email: vine.string().email().trim().optional(),
    phone: vine
      .string()
      .regex(/^\d{2}\d{9}$/)
      .optional(),
    cpf: vine
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
      .optional(),
  })
)
