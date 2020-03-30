
exports.up = function(knex) { //Este método é responsável por criar a tabela
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();  //.primary() define o campo como chave primária.
    table.string('name').notNullable() ; //.notNullable() define que o campo não pode ser nullo.
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();  //Aqui foi definido um tamanho para esse campo.
});
};

exports.down = function(knex) { //Este método serve como um rollback para caso dê algo errado
  return knex.schema.dropTable('ongs');
};
