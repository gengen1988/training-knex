exports.up = function (knex) {
  return knex.schema.createTable('products', t => {
    t.increments()
    t.string('name')
    t.float('price')
    t.timestamps(undefined, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
