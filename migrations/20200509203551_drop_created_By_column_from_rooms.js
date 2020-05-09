
exports.up = function(knex) {
  return knex.schema.table('rooms' , table => {
      table.dropColumn('createdBy');
  })
};

exports.down = function(knex) {
  
};
