'use strict';
var sqlPool = require('../../../data/db/sqlDatasource.js').default;


exports.obtenerClientes = function(req,res){
	console.log('/api/obtenerClientes')
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

	    // definimos Query
	    var query_str = "CALL ferotection_obtenerSuperAdmin_sp();";
	    try{
	    	connection.query(
		    	query_str,[req.body.ref],
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