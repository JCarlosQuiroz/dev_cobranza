// EJEMPLO BD Hibrida!
exports.entrar = function(req, res){
	console.log('POST - /api/ejemplo')
	console.log(req.body)
	var amongo;
	var bsql;
	// Mongo Conection Test
	console.log('mongo conection');
	areas.find({},function(err, finder){
		if(err){
			console.log(err)
		}else{
			console.log(finder)
			amongo = finder;
			// SQL Conection Test
			console.log('SQL conection');
			sqlPool.getConnection(function (err, connection) {
			    // connected! (unless `err` is set)
			    if (err) {
			        console.log('conexión')
			        console.log(err)
			    }
			    connection.query('select * from super_admon', function (err, rows, fields) {
			         connection.release();
			         if (err) {
			            console.log('interno')
			            console.log(err)
			        }
			        bsql = rows;
			        console.log('prueba mongo')
					console.log(amongo)
					console.log('prueba sql')
					console.log(bsql)
					var arr = [amongo,bsql];
					res.send(arr);
			    });
			});
		}
	});
};