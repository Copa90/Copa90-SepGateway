
'use strict';
var server = require('../../server/server');

module.exports = function(PaymentIFBindingPaymentIFBindingSoap) {

  var soapDataSource = server.datasources.SepReferencePaymentSoapDS;
  var PaymentIFBindingPaymentIFBindingSoap;

  soapDataSource.once('connected', function () {
    // Create the model
    PaymentIFBindingPaymentIFBindingSoap = soapDataSource.createModel('PaymentIFBindingPaymentIFBindingSoap', {});
  });


  /**
   * verifyTransaction
   * @param {verifyTransaction} verifyTransaction verifyTransaction
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  PaymentIFBindingPaymentIFBindingSoap.verifyTransaction = function(verifyTransaction, callback) {
      PaymentIFBindingPaymentIFBindingSoap.verifyTransaction(verifyTransaction, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * verifyTransaction1
   * @param {verifyTransaction1} verifyTransaction1 verifyTransaction1
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  PaymentIFBindingPaymentIFBindingSoap.verifyTransaction1 = function(verifyTransaction1, callback) {
      PaymentIFBindingPaymentIFBindingSoap.verifyTransaction1(verifyTransaction1, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * reverseTransaction
   * @param {reverseTransaction} reverseTransaction reverseTransaction
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  PaymentIFBindingPaymentIFBindingSoap.reverseTransaction = function(reverseTransaction, callback) {
      PaymentIFBindingPaymentIFBindingSoap.reverseTransaction(reverseTransaction, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * reverseTransaction1
   * @param {reverseTransaction1} reverseTransaction1 reverseTransaction1
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  PaymentIFBindingPaymentIFBindingSoap.reverseTransaction1 = function(reverseTransaction1, callback) {
      PaymentIFBindingPaymentIFBindingSoap.reverseTransaction1(reverseTransaction1, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  PaymentIFBindingPaymentIFBindingSoap.remoteMethod('verifyTransaction',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'verifyTransaction',
       type: 'verifyTransaction',
       description: 'verifyTransaction',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'verifyTransactionResponse',
       description: 'verifyTransactionResponse',
       root: true } ],
  http: { verb: 'post', path: '/verifyTransaction' },
  description: 'verifyTransaction' }
  );
  
  PaymentIFBindingPaymentIFBindingSoap.remoteMethod('verifyTransaction1',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'verifyTransaction1',
       type: 'verifyTransaction1',
       description: 'verifyTransaction1',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'verifyTransaction1Response',
       description: 'verifyTransaction1Response',
       root: true } ],
  http: { verb: 'post', path: '/verifyTransaction1' },
  description: 'verifyTransaction1' }
  );
  
  PaymentIFBindingPaymentIFBindingSoap.remoteMethod('reverseTransaction',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'reverseTransaction',
       type: 'reverseTransaction',
       description: 'reverseTransaction',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'reverseTransactionResponse',
       description: 'reverseTransactionResponse',
       root: true } ],
  http: { verb: 'post', path: '/reverseTransaction' },
  description: 'reverseTransaction' }
  );
  
  PaymentIFBindingPaymentIFBindingSoap.remoteMethod('reverseTransaction1',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'reverseTransaction1',
       type: 'reverseTransaction1',
       description: 'reverseTransaction1',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'reverseTransaction1Response',
       description: 'reverseTransaction1Response',
       root: true } ],
  http: { verb: 'post', path: '/reverseTransaction1' },
  description: 'reverseTransaction1' }
  );
  
}
