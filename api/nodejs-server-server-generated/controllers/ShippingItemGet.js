'use strict';

var utils = require('../utils/writer.js');
var ShippingItemGet = require('../service/ShippingItemGetService');

module.exports.findShippingItemsByShipperID = function findShippingItemsByShipperID (req, res, next, code, shipperID) {
  ShippingItemGet.findShippingItemsByShipperID(code, shipperID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shippingItemGet = function shippingItemGet (req, res, next, code, shipperID) {
  ShippingItemGet.shippingItemGet(code, shipperID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
