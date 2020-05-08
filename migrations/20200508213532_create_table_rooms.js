
exports.up = function(knex) {
    return knex.schema.createTable('rooms' , table => {
        table.increments('id').primary();
        table.string('roomNo')
        table.integer('createdBy').references('id').inTable('users').onDelete('cascade')
        table.timestamps(false , true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rooms');
};
