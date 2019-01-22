exports.up = function (knex) {
  return knex.schema.createTable('orders', t => {
    t.increments()
    t.integer('account_id').unsigned()
    t.timestamps(undefined, true)

    t.foreign('account_id').references('id').inTable('accounts')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
