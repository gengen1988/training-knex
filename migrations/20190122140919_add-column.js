exports.up = function(knex) {
  return knex.schema.alterTable('stocks', t => {
    t.integer('owner_id').unsigned()
    t.foreign('owner_id').references('id').inTable('accounts')
  })
}

exports.down = function(knex) {
  return knex.schema.alterTable('stocks', t => {
    t.dropForeign('owner_id')
    t.dropColumn('owner_id')
  })
}
