import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const UsersController = () => import('#controllers/users_controller')
const CustomersController = () => import('#controllers/customers_controller')
const ProductsController = () => import('#controllers/products_controller')
const SalesController = () => import('#controllers/sales_controller')
const AddressController = () => import('#controllers/address_controller')

router.get('/', async () => {
  return {
    message: 'hello world',
  }
})

router.post('users/login', [UsersController, 'login'])
router
  .group(() => {
    router.post('/users/signup', [UsersController, 'signup'])

    router.get('/customers', [CustomersController, 'index'])
    router.get('/customers/:id', [CustomersController, 'show'])
    router.post('/customers', [CustomersController, 'store'])
    router.patch('/customers/:id', [CustomersController, 'update'])
    router.delete('/customers/:id', [CustomersController, 'delete'])

    router.get('/products', [ProductsController, 'index'])
    router.get('/products/:id', [ProductsController, 'show'])
    router.post('/products', [ProductsController, 'store'])
    router.patch('/products/:id', [ProductsController, 'update'])
    router.delete('/products/:id', [ProductsController, 'delete'])
    router.patch('/products/:id/restore', [ProductsController, 'retore'])

    router.post('/sales/', [SalesController, 'store'])

    router.post('/address/', [AddressController, 'store'])
  })
  .use(middleware.auth())
