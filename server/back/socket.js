var token = require('./util/token.js'),
	clients = [];

function conectado(client){
	console.log('Client connected...')
	client.on('storeClientInfo', function (data) {
        if(data.traking && data.user && data.traking != '' && data.traking != 'undefined' && data.user != ''){
			var posicion = token.encontrarToken({
	        	token  : data.traking,
	        	nombre : data.user
	        });
	        if (posicion >= 0) {
	        	var clientInfo = new Object();
		        clientInfo.customId         = data.customId;
		        clientInfo.clientId     = client.id;
	    		
	    		clients.push(clientInfo);
	    		console.log('Socket Validado')
	    		console.log(clients)
		    	
	    	}else{
	    		console.log('Socket invalidado')
	    		// client.connected[sessionid].emit('message', 'for your eyes only');
	    		client.disconnect();
	    		console.log(clients)
	    	}
	    }else{
    		console.log('Socket invalidado')
    		// client.connected[sessionid].emit('message', 'for your eyes only');
    		client.disconnect();
    		console.log(clients)

    	}
    });

    client.on('disconnect', function (data) {
    	console.log('client disconnect...')
        for( var i=0, len=clients.length; i<len; ++i ){
            var c = clients[i];
            if(c.clientId == client.id){
                clients.splice(i,1);
                break;
            }
        }
    });
}

exports.conectado = conectado;