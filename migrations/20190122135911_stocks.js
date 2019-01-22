exports.up = function (knex) {
  return knex.schema.createTable('stocks', t => {
    t.increments()
    t.integer('product_id').unsigned()
    t.integer('amount')
    t.timestamps(undefined, true)

    t.foreign('product_id').references('id').inTable('products')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stocks')
}
