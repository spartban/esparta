'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addConta = function addConta (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  var data = req.swagger.params['data'].value;
  var valor = req.swagger.params['valor'].value;
  Default.addConta(nome,data,valor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
