exports.up = function (knex) {
  return knex.schema.createTable('accounts', t => {
    t.increments()
    t.string('name')
    t.timestamps(undefined, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('accounts')
}
