'use strict';


/**
 * Adiciona uma nova conta na plataforma.
 *
 * nome String Descrição da conta.
 * data String Data da conta
 * valor BigDecimal Valor da conta
 * returns Conta
 **/
exports.addConta = function(nome,data,valor) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "valor" : "valor",
  "id" : "id",
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

