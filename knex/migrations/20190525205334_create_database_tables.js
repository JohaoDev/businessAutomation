exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('persona', function(table) {
        table.increments('pers_sec').primary();
        table.string('pers_nom');
    }),
    knex.schema.createTable('deudas', function(table) {
        table.increments('deud_sec').primary();
        table.integer('pers_sec').references('pers_sec').inTable('persona');
        table.string('deud_det');
        table.integer('deud_val', 5);
    })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('persona'),
        knex.schema.dropTable('deudas'),
    ]);
  };