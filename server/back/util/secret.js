// Dependencias
var crypto  = require('crypto');

// Llaves para encriptar y desencriptar información
var secret = {};
    secret['secretKey'] 	  = 'esteeselsecretodesolecorp01',
    secret['secretToken']   = 'esteeselsecretodelostokensdesolecorp02',
    secret['secretCredit']   = 'esteNoEselSecretoDesolecorp03';

// tipo de encriptado
var	algorithm = 'aes-256-ctr';


// Functiones para encriptado de password
// Encriptado de password
function encryptIn(text){
  var cipher = crypto.createCipher(algorithm,secret.secretKey);
  var crypted = cipher.update(text,'utf8','hex');
  crypted += cipher.final('hex');
  return crypted;
}
// Desencriptado de password
function decryptIn(text){
  var decipher = crypto.createDecipher(algorithm,secret.secretKey)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


// Funciones para encriptado del token
// Encriptado del token
function encryptOut(text){
  var cipher = crypto.createCipher(algorithm,secret.secretToken);
  var crypted = cipher.update(text,'utf8','hex');
  crypted += cipher.final('hex');
  return crypted;
}
// Desencriptado del token
function decryptOut(text){
  var decipher = crypto.createDecipher(algorithm,secret.secretToken)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

// Functiones para encriptado de password
// Encriptado de las tarjetas de crédito
function encryptCredit(text){
  var cipher = crypto.createCipher(algorithm,secret.secretCredit);
  var crypted = cipher.update(text,'utf8','hex');
  crypted += cipher.final('hex');
  return crypted;
}
// Desencriptado de las tarjetas de crédito
function decryptCredit(text){
  var decipher = crypto.createDecipher(algorithm,secret.secretCredit)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

secret.encryptIn = encryptIn,
secret.decryptIn = decryptIn,
secret.encryptOut = encryptOut,
secret.decryptOut = decryptOut,
secret.encryptCredit = encryptCredit,
secret.decryptCredit = decryptCredit;

exports.secret = secret;