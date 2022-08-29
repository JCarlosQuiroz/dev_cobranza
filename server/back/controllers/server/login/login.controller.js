var sql     = require('mssql'),
	sqlPool = require('../../../data/db/sqlDatasource').default,
	valida  = require('./login.validacion'),
	token 	= require('../../../util/token'),
	keys  	= require('../../../util/secret');

var config = {};
config.loginInput = 2,
config.loginOutput = 2;

exports.entrar = function(req, res){
	console.log('POST - /api/login')
	console.log(req.query)
	console.log(req.body)

	if(valida.validaLoginParams(req.query,req.body,config.loginInput)){
		// var pass = keys.secret.encryptIn(req.body.pass),
		var pass = req.body.pass,
			respuesta = {},
			traking   = '';
	    sql.connect(sqlPool.config,function(err) {
	        if (err){
	        	console.log(err)

	        	res.status(203),
				res.send({error:'Non-Authoritative Information'});
	        	sql.close();
	        }
	        else {
		        var request = new sql.Request();

			    request.query("EXEC spCClienteAcceso @usuario = "+req.body.usuario+", @clave = "+pass+";", function(err, response) {
			    	console.log(response)
			    	if(err){
			    		console.log(err)

			    		res.status(203),
						res.send({error:'Non-Authoritative Information'});
			    		sql.close();
			    	}
			    	if(response.recordset.length > 0){
			    		respuesta = response.recordset[0];

			        	traking = token.nuevoToken(response.recordset[0].nombreCorto),
			        	res.header({"Traking":traking});

			        	res.status(202),
						res.send(respuesta);

						sql.close();
					}else{
						res.status(203),
						res.send({error:'Non-Authoritative Information'});

						sql.close();
					}
			        
			    });
	        }
	    });
	}else{
		res.status(203),
		res.send({error:'Non-Authoritative Information'});
	}
}

exports.salir = function(req, res){
	console.log('POST - /api/logout')
	console.log(req.headers)
	console.log(req.query)
	console.log(req.body)

	// Validar petición
	if(valida.validaLogoutParams(req.headers,req.query,req.body,config.loginOutput)){
		var posicion = token.encontrarToken({
	        	token: req.headers.key,
	        	nombre: req.body.name
	        });
    	if (posicion >= 0) {
			var respuesta = {msg:'Ok'};

			token.eliminarToken({token : req.headers.traking, nombre : req.body.name,posicion:posicion});

			res.status(200),
			res.send(respuesta);
		}else{
			res.status(203),
			res.send({error:'Non-Authoritative Information'});
		}
	}else{
		res.status(203),
		res.send({error:'Non-Authoritative Information'});
	}
}