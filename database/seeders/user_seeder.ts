import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Customer from '#models/user'
export default class extends BaseSeeder {
  async run() {
    await Customer.createMany([
      {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        password: 'password123',
      },
      {
        name: 'Maria Santos',
        email: 'maria.santos@example.com',
        password: 'password321',
      },
    ])
  }
}
