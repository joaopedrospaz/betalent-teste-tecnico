import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().minLength(8).maxLength(32),
  })
)

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3),
    email: vine.string().email().trim(),
    password: vine.string().minLength(8).maxLength(32),
  })
)
