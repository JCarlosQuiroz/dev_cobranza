(function() {
    'use strict';

	angular
		.module('app')
		.factory('reporteService', ['$http','Main_API','Main_URL', function($http, Main_API,Main_URL){

			// Local Variables
			var vm = {};

			vm.obtenerReportesCobranza = function(obj){
				// Reset Values
				Main_API.data = '',
				Main_API.url = '';
				
				// Set Values
				Main_API.url = Main_URL.url+'api/obtenerReportesCobranza';
				Main_API.data = "ref="+obj;

				return $http(Main_API)
			}

			vm.obtenerDeudorDetalle = function(id){
				// Reset Values
				Main_API.data = '',
				Main_API.url = '';
				
				// Set Values
				Main_API.url = Main_URL.url+'api/obtenerDeudorDetalle';
				Main_API.data = "ref="+id;

				return $http(Main_API)
			}
			vm.obtenerDeudorDetalleDocumentos = function(id){
				// Reset Values
				Main_API.data = '',
				Main_API.url = '';
				
				// Set Values
				Main_API.url = Main_URL.url+'api/obtenerDeudorDetalleDocumentos';
				Main_API.data = "ref="+id;

				return $http(Main_API)
			}

			return vm;
		}]);
})();