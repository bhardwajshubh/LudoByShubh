
exports.up = function(knex) {
  return knex.schema.createTable('users' , table => {
      table.increments('id').primary();
      table.string('name');
      table.string('token');
      table.string('roomId');
      table.timestamps(false , true );
  })
};

exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('users');
};
