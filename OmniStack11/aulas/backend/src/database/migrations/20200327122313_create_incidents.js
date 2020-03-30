
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();  //increments() cria a chave primária automaticamente.
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();  //Número com casas decimais.

    /**
     * Aqui estámos criando uma tabela, e em seguida definindo que o valor dela referencia uma chave
     * primária em outra tabela.
     *   */

    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
