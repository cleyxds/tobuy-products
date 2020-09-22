
exports.up = function(knex) {
  return knex.schema
    .createTable('products', table => {
      table.increments('id').primary();

      table.string('title').notNullable();
      table.decimal('price').notNullable();

      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
