(function() {
    'use strict';

    angular
        .module('app')

        // MSG
        .constant('Success',{
            'loginInvalid' : {
                'title'  :'Advertencia',
                'text'   :'Datos de usuario invalidos, verifique sus credenciales e intente de nuevo.',
                'btnText':'Aceptar'
            },
            'creation'     : 'Se creo satisfactoriamente.',
            'updating'     : 'Se actualizó satisfactoriamente.',
            'saving'       : 'Los datos se han guardaron'
        })
        .constant('Error',{
            'invalidData'  : 'Los datos proporcionados son invalidos',
            'dbError'      : 'Eror en la consulta, comuniquese con el proveedor',
            'systemError'  : {
                'title'   : 'Error',
                'text'    :'Hubo un error en el sistema, por favor intente mas tarde',
                'btnText' : 'Entendido'
            }
        });
})();
