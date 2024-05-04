'use strict';


/**
 * Finds shippingItems by ShipperID
 * Returns all shipped item from the given ShipperID
 *
 * code String authentication key
 * shipperID String ShipperID that the shipped items was at
 * returns List
 **/
exports.findShippingItemsByShipperID = function(code,shipperID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ShipmentID" : "5",
  "ShippingPO" : "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
  "_attachments" : "attachments/",
  "_rid" : "ldVkAP0fhCQGAAAAAAAAAA==",
  "id" : "10",
  "WarehouseID" : "a908cef7-4c67-40f3-88f7-08a03ba4104a",
  "_self" : "dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQGAAAAAAAAAA==/",
  "ShipperID" : "Duan",
  "Date" : "Mar 9, 2022",
  "_etag" : "\\\\\"7e007215-0000-0100-0000-640e84690000\\\\\"",
  "BoxesRcvd" : "12",
  "_ts" : 1678673001
}, {
  "ShipmentID" : "5",
  "ShippingPO" : "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
  "_attachments" : "attachments/",
  "_rid" : "ldVkAP0fhCQGAAAAAAAAAA==",
  "id" : "10",
  "WarehouseID" : "a908cef7-4c67-40f3-88f7-08a03ba4104a",
  "_self" : "dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQGAAAAAAAAAA==/",
  "ShipperID" : "Duan",
  "Date" : "Mar 9, 2022",
  "_etag" : "\\\\\"7e007215-0000-0100-0000-640e84690000\\\\\"",
  "BoxesRcvd" : "12",
  "_ts" : 1678673001
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds shippingItems by ShipperID
 * Returns all shipped item from the given ShipperID
 *
 * code String authentication key
 * shipperID String ShipperID that the shipped items was at
 * returns List
 **/
exports.shippingItemGet = function(code,shipperID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ShipmentID" : "5",
  "ShippingPO" : "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
  "_attachments" : "attachments/",
  "_rid" : "ldVkAP0fhCQGAAAAAAAAAA==",
  "id" : "10",
  "WarehouseID" : "a908cef7-4c67-40f3-88f7-08a03ba4104a",
  "_self" : "dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQGAAAAAAAAAA==/",
  "ShipperID" : "Duan",
  "Date" : "Mar 9, 2022",
  "_etag" : "\\\\\"7e007215-0000-0100-0000-640e84690000\\\\\"",
  "BoxesRcvd" : "12",
  "_ts" : 1678673001
}, {
  "ShipmentID" : "5",
  "ShippingPO" : "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
  "_attachments" : "attachments/",
  "_rid" : "ldVkAP0fhCQGAAAAAAAAAA==",
  "id" : "10",
  "WarehouseID" : "a908cef7-4c67-40f3-88f7-08a03ba4104a",
  "_self" : "dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQGAAAAAAAAAA==/",
  "ShipperID" : "Duan",
  "Date" : "Mar 9, 2022",
  "_etag" : "\\\\\"7e007215-0000-0100-0000-640e84690000\\\\\"",
  "BoxesRcvd" : "12",
  "_ts" : 1678673001
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

