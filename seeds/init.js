const faker = require('faker')

exports.seed = function (knex) {
  return (async () => {
    await knex('items_in_orders').del()
    await knex('stocks').del()
    await knex('products').del()
    await knex('orders').del()
    await knex('accounts').del()

    await knex('accounts').insert([
      { id: 1, name: faker.internet.userName() },
      { id: 2, name: faker.internet.userName() },
      { id: 3, name: faker.internet.userName() },
      { id: 4, name: faker.internet.userName() }
    ])

    await knex('products').insert([
      { id: 1, name: faker.commerce.productName(), price: faker.commerce.price() },
      { id: 2, name: faker.commerce.productName(), price: faker.commerce.price() },
      { id: 3, name: faker.commerce.productName(), price: faker.commerce.price() }
    ])

    await knex('stocks').insert([
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { amount: faker.random.number(), product_id: faker.random.arrayElement([1, 2, 3]), owner_id: faker.random.arrayElement([1, 2, 3, 4]) }
    ])

    await knex('orders').insert([
      { id: 1, account_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { id: 2, account_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { id: 3, account_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { id: 4, account_id: faker.random.arrayElement([1, 2, 3, 4]) },
      { id: 5, account_id: faker.random.arrayElement([1, 2, 3, 4]) }
    ])

    await knex('items_in_orders').insert([
      { product_id: faker.random.arrayElement([1, 2, 3]), order_id: faker.random.arrayElement([1, 2, 3, 4, 5]), amount: faker.random.number() },
      { product_id: faker.random.arrayElement([1, 2, 3]), order_id: faker.random.arrayElement([1, 2, 3, 4, 5]), amount: faker.random.number() },
      { product_id: faker.random.arrayElement([1, 2, 3]), order_id: faker.random.arrayElement([1, 2, 3, 4, 5]), amount: faker.random.number() },
      { product_id: faker.random.arrayElement([1, 2, 3]), order_id: faker.random.arrayElement([1, 2, 3, 4, 5]), amount: faker.random.number() },
      { product_id: faker.random.arrayElement([1, 2, 3]), order_id: faker.random.arrayElement([1, 2, 3, 4, 5]), amount: faker.random.number() },
      { product_id: faker.random.arrayElement([1, 2, 3]), order_id: faker.random.arrayElement([1, 2, 3, 4, 5]), amount: faker.random.number() }
    ])
  })()
}
