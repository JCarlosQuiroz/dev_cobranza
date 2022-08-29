var sql     = require('mssql'),
	sqlPool = require('../../../data/db/sqlDatasource').default,
	token 	= require('../../../util/token');

var config = {};
config.loginInput = 2,
config.loginOutput = 2;

exports.obtenerReportesCobranza = function(req, res){
	console.log('POST - /api/obtenerReportesCobranza')
	console.log(req.query)
	console.log(req.body)

	// if(valida.validaLoginParams(req.query,req.body,config.loginInput)){
		// var pass = keys.secret.encryptIn(req.body.pass),
		var respuesta = {};
	    sql.connect(sqlPool.config,function(err) {
	        if (err){
	        	console.log(err)

	        	res.status(203),
				res.send({error:'Non-Authoritative Information'});
	        	sql.close();
	        }
	        else {
		        var request = new sql.Request();
			    request.query("EXEC spCReporteCobranza @idCliente = "+req.body.ref+";", function(err, response) {
			    	console.log(response)
			    	if(err){
			    		console.log(err)

			    		res.status(203),
						res.send({error:'Non-Authoritative Information'});
			    		sql.close();
			    	}
		    		respuesta = response.recordset;

		        	res.status(202),
					res.send(respuesta);

					sql.close();
			        
			    });
	        }
	    });
	// }else{
	// 	res.status(203),
	// 	res.send({error:'Non-Authoritative Information'});
	// }
}

exports.obtenerDeudorDetalleDocumentos = function(req, res){
	console.log('POST - /api/obtenerDeudorDetalleDocumentos')
	console.log(req.query)
	console.log(req.body)

	// if(valida.validaLoginParams(req.query,req.body,config.loginInput)){
		// var pass = keys.secret.encryptIn(req.body.pass),
		var respuesta = {};
	    sql.connect(sqlPool.config,function(err) {
	        if (err){
	        	console.log(err)

	        	res.status(203),
				res.send({error:'Non-Authoritative Information'});
	        	sql.close();
	        }
	        else {
		        var request = new sql.Request();
			    request.query("EXEC spCReporteCobranzaDocumentos @idDeudor = "+req.body.ref+";", function(err, response) {
			    	console.log(response)
			    	if(err){
			    		console.log(err)

			    		res.status(203),
						res.send({error:'Non-Authoritative Information'});
			    		sql.close();
			    	}
		    		respuesta = response.recordset;

		        	res.status(202),
					res.send(respuesta);

					sql.close();
			        
			    });
	        }
	    });
	// }else{
	// 	res.status(203),
	// 	res.send({error:'Non-Authoritative Information'});
	// }
}

exports.obtenerDeudorDetalle = function(req, res){
	console.log('POST - /api/obtenerDeudorDetalle')
	console.log(req.query)
	console.log(req.body)

	// if(valida.validaLoginParams(req.query,req.body,config.loginInput)){
		// var pass = keys.secret.encryptIn(req.body.pass),
		var respuesta = {};
	    sql.connect(sqlPool.config,function(err) {
	        if (err){
	        	console.log(err)

	        	res.status(203),
				res.send({error:'Non-Authoritative Information'});
	        	sql.close();
	        }else{
		        var request = new sql.Request();
			    request.query("EXEC spCDeudorDetalle @idDeudor = "+req.body.ref+";", function(err, response) {
			    	if(err){
			    		console.log(err)

			    		res.status(203),
						res.send({error:'Non-Authoritative Information'});
			    		sql.close();
			    	}
			    	// if(response.recordset.lenght > 0){
			    		var pagos = [],
					    	seguimientos = [],
					    	convenios = [];
			    		// .............DEUDOR
				    	respuesta.deudorCodigo = response.recordset[0].deudorCodigo,
				    	respuesta.deudorNombre = response.recordset[0].deudorNombre,
				    	respuesta.deudorCalle = response.recordset[0].deudorCalle,
				    	respuesta.deudorNumero = response.recordset[0].deudorNumero,
				    	respuesta.deudorColonia = response.recordset[0].deudorColonia,
				    	respuesta.deudorLocalidad = response.recordset[0].deudorLocalidad,
				    	respuesta.deudorMunicipio = response.recordset[0].deudorMunicipio,
				    	respuesta.deudorEstado = response.recordset[0].deudorEstado,
				    	respuesta.deudorCP = response.recordset[0].deudorCP,
				    	respuesta.deudorRFC = response.recordset[0].deudorRFC,
				    	respuesta.deudorTelefono = response.recordset[0].deudorTelefono,
				    	respuesta.deudorNextel = response.recordset[0].deudorNextel,
				    	respuesta.deudorIFE = response.recordset[0].deudorIFE,
				    	respuesta.deudorCorreo = response.recordset[0].deudorCorreo,
				    	// ----------------AVAL
				    	respuesta.avalNombre = response.recordset[0].avalNombre,
				    	respuesta.avalCalle = response.recordset[0].avalCalle,
				    	respuesta.avalNumero = response.recordset[0].avalNumero,
				    	respuesta.avalColonia = response.recordset[0].avalColonia,
				    	respuesta.avalLocalidad = response.recordset[0].avalLocalidad,
				    	respuesta.avalMunicipio = response.recordset[0].avalMunicipio,
				    	respuesta.avalEstado = response.recordset[0].avalEstado,
				    	respuesta.avalCP = response.recordset[0].avalCP,
				    	respuesta.avalRFC = response.recordset[0].avalRFC,
				    	respuesta.avalTelefono = response.recordset[0].avalTelefono,
				    	respuesta.avalNextel = response.recordset[0].avalNextel,
				    	respuesta.avalIFE = response.recordset[0].avalIFE,
				    	respuesta.avalCorreo = response.recordset[0].avalCorreo,
				    	// ------------------REPRESENTANTE
				    	respuesta.repNombre = response.recordset[0].repNombre,
				    	respuesta.repCalle = response.recordset[0].repCalle,
				    	respuesta.repNumero = response.recordset[0].repNumero,
				    	respuesta.repColonia = response.recordset[0].repColonia,
				    	respuesta.repLocalidad = response.recordset[0].repLocalidad,
				    	respuesta.repMunicipio = response.recordset[0].repMunicipio,
				    	respuesta.repEstado = response.recordset[0].repEstado,
				    	respuesta.repCP = response.recordset[0].repCP,
				    	respuesta.repRFC = response.recordset[0].repRFC,
				    	respuesta.repTelefono = response.recordset[0].repTelefono,
				    	respuesta.repNextel = response.recordset[0].repNextel,
				    	respuesta.repIFE = response.recordset[0].repIFE,
				    	respuesta.repCorreo = response.recordset[0].repCorreo,
				    	respuesta.seguimientos = [],
				    	respuesta.pagos = [],
				    	respuesta.convenios = [];


				    	for(var i = 0;i<response.recordset.length;i++){
				    		if(seguimientos.length > 0){
				    			if(typeof response.recordset[i].segId == 'number'){
					    			if(seguimientos.indexOf(response.recordset[i].segId) == -1){
					    				respuesta.seguimientos.push({
						    				segEtapa:response.recordset[i].segEtapa,
						    				segFecha:response.recordset[i].segFecha,
						    				segComentarios:response.recordset[i].segComentarios,
						    				segJuzgado:response.recordset[i].segJuzgado,
						    				segExpediente:response.recordset[i].segExpediente,
						    				segDistritoJudicial:response.recordset[i].segDistritoJudicial
						    			});
					    			}
					    		}
				    		}else{
				    			if(typeof response.recordset[i].segId == 'number'){
					    			seguimientos.push(response.recordset[i].segId);
					    			respuesta.seguimientos.push({
					    				segEtapa:response.recordset[i].segEtapa,
						    			segFecha:response.recordset[i].segFecha,
						    			segComentarios:response.recordset[i].segComentarios,
						    			segJuzgado:response.recordset[i].segJuzgado,
						    			segExpediente:response.recordset[i].segExpediente,
						    			segDistritoJudicial:response.recordset[i].segDistritoJudicial
					    			});
					    		}
				    		}
				    		if(pagos.length > 0){
				    			if(typeof response.recordset[i].pagoId == 'number'){
					    			if(pagos.indexOf(response.recordset[i].pagoId) == -1){
					    				respuesta.pagos.push({
						    				pagoFecha:response.recordset[i].pagoFecha,
						    				pagoCapital:response.recordset[i].pagoCapital,
						    				pagoIntereses:response.recordset[i].pagoIntereses,
						    				pagoCondonaciones:response.recordset[i].pagoCondonaciones,
						    				pagoObservaciones:response.recordset[i].pagoObservaciones
						    			});
					    			}
					    		}
				    		}else{
				    			if(typeof response.recordset[i].pagoId == 'number'){
					    			pagos.push(response.recordset[i].pagoId);
					    			respuesta.pagos.push({
					    				pagoFecha:response.recordset[i].pagoFecha,
						    				pagoCapital:response.recordset[i].pagoCapital,
						    				pagoIntereses:response.recordset[i].pagoIntereses,
						    				pagoCondonaciones:response.recordset[i].pagoCondonaciones,
						    				pagoObservaciones:response.recordset[i].pagoObservaciones
					    			});
					    		}
				    		}
				    		if(convenios.length > 0){
				    			if(typeof response.recordset[i].conId == 'number'){
					    			if(convenios.indexOf(response.recordset[i].conId) == -1){
					    				respuesta.convenios.push({
						    				conFecha:response.recordset[i].conFecha,
						    				conComentario:response.recordset[i].conComentario,
						    				conDocumentos:response.recordset[i].conDocumentos,
						    				conImporte:response.recordset[i].conImporte,
						    				conCapital:response.recordset[i].conCapital,
						    				conIntereses:response.recordset[i].conIntereses
						    			});
					    			}
					    		}
				    		}else{
				    			if(typeof response.recordset[i].conId == 'number'){
					    			convenios.push(response.recordset[i].conId);
					    			respuesta.convenios.push({
					    				conFecha:response.recordset[i].conFecha,
						    				conComentario:response.recordset[i].conComentario,
						    				conDocumentos:response.recordset[i].conDocumentos,
						    				conImporte:response.recordset[i].conImporte,
						    				conCapital:response.recordset[i].conCapital,
						    				conIntereses:response.recordset[i].conIntereses
					    			});
					    		}
				    		}
				    		if(i == (response.recordset.length-1)){
				    			res.status(202),
								res.send(respuesta);

								sql.close();
				    		}
				    	}
				    	
			   //  	}else{
			   //  		respuesta = [];
			   //  		res.status(202),
						// res.send(respuesta);

						// sql.close();
						// console.log('Else')
			   //  	}
			    	
		    		

		        	
			        
			    });
	        }
	    });
	// }else{
	// 	res.status(203),
	// 	res.send({error:'Non-Authoritative Information'});
	// }
}