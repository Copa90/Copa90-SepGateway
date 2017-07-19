
'use strict';
var server = require('../../server/server');

module.exports = function(PaymentIFBindingPaymentIFBindingSoap) {

  var soapDataSource = server.datasources.SepInitPaymentSoapDS;
  var PaymentIFBindingPaymentIFBindingSoap;

  soapDataSource.once('connected', function () {
    // Create the model
    PaymentIFBindingPaymentIFBindingSoap = soapDataSource.createModel('PaymentIFBindingPaymentIFBindingSoap', {});
  });


  /**
   * RequestToken
   * @param {RequestToken} RequestToken RequestToken
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  PaymentIFBindingPaymentIFBindingSoap.RequestToken = function(RequestToken, callback) {
      PaymentIFBindingPaymentIFBindingSoap.RequestToken(RequestToken, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * RequestMultiSettleTypeToken
   * @param {RequestMultiSettleTypeToken} RequestMultiSettleTypeToken RequestMultiSettleTypeToken
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  PaymentIFBindingPaymentIFBindingSoap.RequestMultiSettleTypeToken = function(RequestMultiSettleTypeToken, callback) {
      PaymentIFBindingPaymentIFBindingSoap.RequestMultiSettleTypeToken(RequestMultiSettleTypeToken, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  PaymentIFBindingPaymentIFBindingSoap.remoteMethod('RequestToken',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'RequestToken',
       type: 'RequestToken',
       description: 'RequestToken',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'RequestTokenResponse',
       description: 'RequestTokenResponse',
       root: true } ],
  http: { verb: 'post', path: '/RequestToken' },
  description: 'RequestToken' }
  );
  
  PaymentIFBindingPaymentIFBindingSoap.remoteMethod('RequestMultiSettleTypeToken',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'RequestMultiSettleTypeToken',
       type: 'RequestMultiSettleTypeToken',
       description: 'RequestMultiSettleTypeToken',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'RequestMultiSettleTypeTokenResponse',
       description: 'RequestMultiSettleTypeTokenResponse',
       root: true } ],
  http: { verb: 'post', path: '/RequestMultiSettleTypeToken' },
  description: 'RequestMultiSettleTypeToken' }
  );
  
}
