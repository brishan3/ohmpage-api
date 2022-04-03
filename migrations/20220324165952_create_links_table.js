
exports.up = function(knex) {
  return knex.schema
    .createTable('links', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('url').notNullable();
      table.text('description').notNullable();
      table.string('category').notNullable();
      table.string('subcategory').notNullable();
      table.string('status').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('backgrounds', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('file').notNullable();
      table.string('thumbnail').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};


exports.down = function(knex) {
  return knex.schema.dropTable('links').dropTable('backgrounds');
};
