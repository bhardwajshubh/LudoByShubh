
exports.up = function(knex) {
  return knex.schema.table('users' , table => {
      table.integer('roomId').references('id').inTable('rooms').onDelete('cascade');
  })
};

exports.down = function(knex) {

};
