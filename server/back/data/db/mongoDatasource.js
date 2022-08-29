var mongoose = require("mongoose");

var poolSize = 5,
	options = {
		db: { native_parser: true },
		// PoolSize, nos permite realizar multiples conexiones
		// El problema es que afectará en el rendimiento del CPU
		// 5 es el valor Default
		server: {
			auto_reconnect: true,
			poolSize: poolSize,
			socketOptions: {
                keepAlive: 1,
                connectTimeoutMS: 30000,
                socketTimeoutMS : 30000
    		}
		},
		replset: {
        	ha: true, // Make sure the high availability checks are on
  			haInterval: 5000, // Run every 5 seconds
  			auto_reconnect: true,
            socketOptions: {
                keepAlive: 1,
                connectTimeoutMS: 30000,
                socketTimeoutMS : 30000
            }
	   }
	},
	// server
	urlMongoDB = 'mongodb://urly';
	// local
	// urlMongoDB = process.argv[2] || 'mongodb://localhost/privadas';

console.log('--Probando conexión con MongoDB!--')
mongoose.connect(urlMongoDB, options, function(err, res) {
	if(err) {
		console.log('Conexión MongoDB : error.\n' + err)
	} else {
		console.log(
			'Conexión MongoDB : Ok.\nMongo poolSize : ' +poolSize+'.'
		)
	}
});
module.exports = mongoose;