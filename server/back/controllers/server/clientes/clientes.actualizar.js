'use strict';
var sqlPool = require('../../../data/db/sqlDatasource.js').default,
	keys  	= require('../../../util/secret.js');


exports.actualizarCliente = function(req,res){
	console.log('/api/actualizarCliente')
	console.log(req.body)
	// Conexión sql (abrimos un "pool")
	sqlPool.getConnection(function (err, connection) {
	    // connected! (unless `err` is set)
	    if (err) {
	        console.log('error de conexión')
	        console.log(err)
	        res.status(500);
		    res.send({error:'System error'});
	    }
	    var pass;
	    if(req.body.password == 'undefined' || req.body.password == '' || req.body.password == 'null' || req.body.password == undefined || req.body.password == null){
	    	pass = undefined;

	    }else{
			pass = keys.secret.encryptIn(req.body.password);
	    }
	    // definimos Query
	    var query_str = "CALL ferotection_actualizarCliente(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
	    var tipo_cambio = req.body.tipo_cambio == 'false' ? 0 : 1;
	    try{
	    	connection.query(
		    	query_str,
		    	[
		    		tipo_cambio,
		    		req.body.id_super,
		    		req.body.nombre,
		    		req.body.apellido_paterno,
		    		req.body.apellido_materno,
		    		req.body.usuario,
		    		pass,
		    		req.body.telefono,
		    		req.body.telefono_particular,
		    		req.body.correo,
		    		req.body.calle,
		    		req.body.numero_ext,
		    		req.body.numero_int,
		    		req.body.colonia,
		    		req.body.cp,
		    		req.body.pais,
		    		req.body.estado,
		    		req.body.municipio,
		    		req.body.ciudad
		    	],
		    	function (err, rows, fields) {

		         	// finalizamos conexión
			        connection.release();
			        // ====================

			        if (err) {
			        	// error
			            console.log('error en la consulta')
			            console.log(err)
			            res.status(500);
			            res.send({error:'System error'});
			        }
		         	// Respuesta
		         	//  -- Los parametros de salida deben estar en ingles,
		         	//  -- tanto el valor como el nombre de la propiedad
		        	res.status(202);
					res.send(rows[0]);
				}
		    );
	    }catch(err){
	    	// error
	    	console.log('error de conexión')
	        console.log(err)
	        res.status(500);
		    res.send({error:'System error'});
	    }
	});
	// Validar petición
	// if(valida.validaCrearResidenteParams(req.headers,req.query,req.body,config.obtenerResidentesInput)){
	// 	var posicion = token.encontrarToken({
	//         	token: req.headers.traking,
	//         	nombre: req.body.name
	//         });
 //    	if (posicion >= 0) {

	// 		// Variables
	// 		var respuesta = {
	// 				msg:'Ok'
	// 			};

	// 		// Respuesta
 //         	//  -- Los parametros de salida deben estar en ingles,
 //         	//  -- tanto el valor como el nombre de la propiedad
	// 		res.status(200);
	// 		res.send(respuesta);
	// 	}else{
	// 		res.status(203);
	// 		res.send({error:'Non-Authoritative Information'});
	// 	}
	// }else{
	// 	res.status(203);
	// 	res.send({error:'Non-Authoritative Information'});
	// }
}