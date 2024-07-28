import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Customer from '#models/customer'
export default class extends BaseSeeder {
  async run() {
    await Customer.createMany([
      {
        email: 'john.doe@example.com',
        name: 'John Doe',
        cpf: '123.456.789-00',
        phone: '11987654321',
      },
      {
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        cpf: '987.654.321-00',
        phone: '21987654321',
      },
      {
        email: 'mike.jones@example.com',
        name: 'Mike Jones',
        cpf: '456.123.789-00',
        phone: '31987654321',
      },
    ])
  }
}
