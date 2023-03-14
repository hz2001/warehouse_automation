'use strict';

var utils = require('../utils/writer.js');
var ShippingItemPost = require('../service/ShippingItemPostService');

module.exports.postShippingItem = function postShippingItem (req, res, next, code, shipperID) {
  ShippingItemPost.postShippingItem(code, shipperID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shippingItemPost = function shippingItemPost (req, res, next, code, shipperID) {
  ShippingItemPost.shippingItemPost(code, shipperID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
