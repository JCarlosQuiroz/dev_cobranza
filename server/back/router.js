'use strict';
// exportar controladores
/*CLIENTE */
var	clientes 	= {
		alta:require('./controllers/server/clientes/clientes.alta'),
		consulta:require('./controllers/server/clientes/clientes.consulta'),
		actualizar:require('./controllers/server/clientes/clientes.actualizar'),
		estado:require('./controllers/server/clientes/clientes.estado')
	},
	login = require('./controllers/login/login.controller'),
	serverLogin = require('./controllers/server/login/login.controller'),
	reportes = {
		consulta: require('./controllers/client/reportes/reportes.obtener')
	};



module.exports = function(app){
	/*Login Client*/
	app.post('/api/login',  login.entrar),
	app.post('/api/logout', login.salir),
	/*Login Server*/
	app.post('/api/serverLogin',  serverLogin.entrar),
	app.post('/api/serverLogout', serverLogin.salir),
	/*MODULO*/
	/*Clientes*/
	app.post('/api/obtenerClientes',   clientes.consulta.obtenerClientes),
	app.post('/api/crearCliente', 	   clientes.alta.crearCliente),
	app.post('/api/actualizarCliente', clientes.actualizar.actualizarCliente),
	app.post('/api/estadoCliente', 	   clientes.estado.estadoCliente),

	app.post('/api/obtenerReportesCobranza', reportes.consulta.obtenerReportesCobranza),
	app.post('/api/obtenerDeudorDetalle', reportes.consulta.obtenerDeudorDetalle),
	app.post('/api/obtenerDeudorDetalleDocumentos', reportes.consulta.obtenerDeudorDetalleDocumentos),
	/* BAD REQUESTS */
	// app.all('*',function(req,res){
	// 	console.log('POINT TO POINT URL Bad Request ')
	// 	throw new Error("Bad Request")
	// }),
	app.use(function(e, req, res, next) {
	    if (e.message === "Bad request") {
	        res.status(400).json({error: {msg: e.message, stack: e.stack}});
	    }
	});
	/*END*/
};

console.log('Rutas : Ok')