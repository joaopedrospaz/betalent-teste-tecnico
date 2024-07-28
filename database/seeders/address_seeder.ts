import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Address from '#models/address'
export default class extends BaseSeeder {
  async run() {
    await Address.createMany([
      {
        customerId: 1,
        street: 'Rua das Flores',
        number: '123',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01000-000',
      },
      {
        customerId: 2,
        street: 'Avenida Atlântica',
        number: '456',
        neighborhood: 'Copacabana',
        city: 'Rio de Janeiro',
        state: 'RJ',
        zipCode: '22000-000',
      },
      {
        customerId: 3,
        street: 'Rua XV de Novembro',
        number: '789',
        neighborhood: 'Centro',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80000-000',
      },
    ])
  }
}
