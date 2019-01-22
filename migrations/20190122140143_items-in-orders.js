exports.up = function (knex) {
  return knex.schema.createTable('items_in_orders', t => {
    t.increments()
    t.integer('product_id').unsigned()
    t.integer('order_id').unsigned()
    t.integer('amount')

    t.foreign('product_id').references('id').inTable('products')
    t.foreign('order_id').references('id').inTable('orders')
    t.unique(['order_id', 'product_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('items_in_orders')
}
