var sql = require('mssql'),
	sqlPool = {},
	config = {
		user: 'root',
		password: '',
		server: 'localhost',
		port: '3306',
		database: 'r1',
		connectionTimeout: 0,
		requestTimeout : 0		
	};
	// config = {
	// 	user: 'root', 
	// 	password: '', 
	// 	server: '127.0.0.1',
	// 	port: '1433',
	// 	database: 'R1',
	// 	connectionTimeout: 0,
	// 	requestTimeout : 0
	// };

function ping(){
	console.log('--Probando conexión con Sql!--');
	sql.connect(config, function(err) {
		if(err){
			console.log('Conexión Fallida');
			sql.close();
		}else{
			var request = new sql.Request();
		    request.query("select * from conexion", function(err, response) {
		        console.log('Conexión exitosa');
		        sql.close();
		    });
		}
	    
	});
}

sqlPool.config = config;
sqlPool.ping = ping;

module.exports = sqlPool;