exports.up = function(knex) {
  return knex.schema.createTable("ongs", table => {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp", 20).notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.index("name");
    table.index("city");
    table.index("uf");
    table.unique("email");
    table.unique("whatsapp");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
