
exports.up = function(knex) {
  return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
    /*tudo que quero que seja acrescentado na tabela*/
  });
};

exports.down = function(knex) {
 return knex.schema.droptable('ongs');

  /*caso eu queiraexcluir a tabela inteira*/
};
