// Dependencias
var crypto  = require('crypto'),
    keys    = require('./secret.js');

// Almacenamos tokens en esta variable
var tokens  = [
    {
        // token:'030740426140870n1s89g01sms3vhjais02j4i0dem9ewr1fk54cr3srgb5fusorhrvcibwxyjigsowpi',
        // usuario:'2a465943d6c8'
    }
];

// Buscamos el token
function encontrarToken(obj){
    // console.log('Searching token')
    // console.log(obj)

    var usuario = keys.secret.encryptOut(obj.nombre);

	for(var i=0; i <= tokens.length-1; i++){   
        if(obj.token === tokens[i].token && usuario === tokens[i].usuario){
            var posicion = i;
        }
    }
    return posicion;
}

// Generamos token
function  nuevoToken(nombre){
    // encriptado del usuario para generar token
    var usuario = keys.secret.encryptOut(nombre);

    var m  = Math.random().toString(36).replace(/[^a-z]+/g, '');
    var m2 = Math.random().toString(36).replace(/[^0-9]+/g, '');
    var m3 = Math.random().toString(36).toString(12).replace('.','');
    var m4 = Math.random().toString(36).toString(12).replace('.','');

    var token = m2+m4+m3+m;
    
    tokens.push({token: token,usuario: usuario});
    // console.log('New Token')
    // console.log(token)
    // console.log(usuario)
    return token;
}

// Buscamos el token
function eliminarToken(obj){
    // console.log('Searching token')
    // console.log(obj)

    var usuario = keys.secret.encryptOut(obj.nombre);

    for(var i=0; i <= tokens.length-1; i++){   
        if(obj.token === tokens[i].token && usuario === tokens[i].usuario){
            tokens.splice(i,1);
        }
    }

}

// Vaciamos caché
function limpiarTokens(){
	tokens.splice(0,tokens.length);
}

// Exportar valores
exports.tokens          = tokens;
exports.nuevoToken      = nuevoToken;
exports.encontrarToken	= encontrarToken;
exports.eliminarToken   = eliminarToken;
exports.limpiarTokens   = limpiarTokens;