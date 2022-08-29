// Modulos
var express  	= require('express'),
    fs       	= require('fs'),
    cors     	= require('cors'),
    bodyParser 	= require('body-parser'),
    app 	 	= express(),
    // server      = require('http').createServer(app),
    // io          = require('socket.io')(server),
    // socket      = require('./back/socket.js'),
    // Conexión SQL
    sqlPool     = require(__dirname+'/back/data/db/sqlDatasource.js');

// Variables de entorno Local
var port      = process.env.PORT || 8080,
    local     = 'dev.custom.com';

// Variables de producción
// var port,
//     local;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "https://custom.com");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "Traking");
    // res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static(__dirname + '/view'));
try{
    // Inicializar rutas
    require('./back/router.js')(app);
} catch (err) {
    console.log('Rutas: error');
    console.log(err);
}

try{
    // ping MySql database
    sqlPool.ping();
} catch (err) {
    console.log('MySql: error');
    console.log(err);
}

// Socket IO
// io.on('connection', socket.conectado);

// Inicializar servidor
app.listen(port);
console.log('Servidor corriendo en http://'+local+':'+port+'/');